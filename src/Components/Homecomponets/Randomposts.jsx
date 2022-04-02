import { Input } from "@mui/material";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { BiDotsHorizontal } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import styledComponents from "styled-components";
import { CommentModal } from "../CommentModal";
import { InstagramSkeleton } from "../skeleton";

export const Randonpost = () => {
  const [data, setData] = useState([]);
  const [profileData, setProfileData] = useState({});
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getAllPosts();
  }, []);
  const getAllPosts = () => {
    setLoading(true);
    axios
      .get(`https://thebackendinsta.herokuapp.com/post`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
  };

  const postComment = (data) => {
    const post_id = data?.post_id?._id;
    const user_id = data?.user_id?._id;
    const payload = {
      title: comment,
      post_id,
      user_id,
    };
    axios
      .get(`https://thebackendinsta.herokuapp.com/comment`, payload, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      });
    setComment("");
  };

  const likeDislikePost = (postId, userId, list) => {
    let user = list?.post_likers?.filter((el) => el === userId);
    if (user?.length) return null;
    else {
      axios
        .post(
          `https://thebackendinsta.herokuapp.com/post/like/${postId}/${userId}`,
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          let newData = data.map((el) => {
            if (el._id === list?._id) {
              return { ...el, post_likers: [...el?.post_likers, userId] };
            } else return el;
          });
          setProfileData(res.data);
          setData(newData);
        });
    }
  };

  return (
    <>
      {loading ? (
        <div className="loader">
          <InstagramSkeleton loading />
        </div>
      ) : (
        data?.map((el, i) => (
          <div key={i} className="randompostContainer">
            <div className="randompostUsername">
              <div>
                <img
                  src={
                    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  }
                  alt=""
                />
                <p
                  onClick={() => navigate(`/userprofile/${el?.user_id?._id}`)}
                  className="user-name"
                >
                  {el?.user_id?.user_name || ""}
                </p>
              </div>

              {/*the dot section */}
              <div>
                <BiDotsHorizontal fontSize={"20px"} />
              </div>
            </div>

            <div className="randompostImage">
              <img
                onClick={() => {
                  setProfileData(el);
                  setOpenModal(true);
                }}
                src={
                  el?.post_image ||
                  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                }
                alt=""
              />
            </div>

            <div className="randompostSharelike">
              <div className="icons-container">
                <div>
                  <FiHeart
                    fill={el?.post_likers?.length ? "red" : "white"}
                    onClick={() =>
                      likeDislikePost(el?._id, el?.user_id?._id, el)
                    }
                  />
                  <FaRegComment />
                  <FaTelegramPlane />
                </div>
                <div>
                  <svg
                    aria-label="Save"
                    class="_8-yf5 "
                    color="#262626"
                    fill="#262626"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <polygon
                      fill="none"
                      points="20 21 12 13.44 4 21 4 3 20 3 20 21"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></polygon>
                  </svg>
                </div>
              </div>
              <p className="likes-count">
                {(el?.post_likers?.length || 0) + " " + "Likes"}
              </p>
              <p className="time-posted">
                {moment(el?.updatedAt).startOf("hour").fromNow()}
              </p>
            </div>
            <CommentButton>
              <Input
                disableUnderline
                type="text"
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <span onClick={() => postComment(el)} className="comment-btn">
                Post
              </span>
            </CommentButton>
          </div>
        ))
      )}
      <CommentModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        data={profileData}
        likeDislikePost={likeDislikePost}
      />
    </>
  );
};

const CommentButton = styledComponents.div`
  padding: 0 12px;  
  position: relative;

  input {
      width: max-content;
  }

.comment-btn {
    position: absolute;
    right: 12px;
    top: 7px;
    font-size: 14px;
    color: #0095f6;
}

`;
