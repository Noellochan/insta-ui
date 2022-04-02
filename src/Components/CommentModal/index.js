import { Dialog, Input } from "@mui/material";
import moment from "moment";
import { FaRegComment, FaTelegramPlane } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { MdMoreHoriz } from "react-icons/md";
import {
  CommentButton,
  CommentSection,
  Content,
  Footer,
  Header,
  Wrapper,
} from "./styles";

export const CommentModal = ({ data, open, onClose, likeDislikePost }) => {
  console.log(data);

  return (
    <Wrapper>
      <Dialog
        style={{ height: "80vh" }}
        open={open}
        onClose={onClose}
        maxWidth="lg"
      >
        <Content>
          <div className="first-half">
            <img src={data?.post_image} alt="img" />
          </div>
          <div className="second-half">
            <Header>
              <div>
                <img src={data?.post_image} alt="img" />
                <div>
                  <h4>{data?.user_id?.user_name}</h4>
                  <p>{data?.post_location}</p>
                </div>
              </div>
              <div>
                <MdMoreHoriz fontSize={"20px"} />
              </div>
            </Header>
            <CommentSection></CommentSection>
            <Footer>
              <div className="randompostSharelike">
                <div className="icons-container">
                  <div>
                    <FiHeart
                      fill={data?.post_likers?.length ? "red" : "white"}
                      onClick={() =>
                        likeDislikePost(data?._id, data?.user_id?._id, data)
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
                  {(data?.post_likers?.length || 0) + " " + "Likes"}
                </p>
                <p className="time-posted">
                  {moment(data?.updatedAt).startOf("hour").fromNow()}
                </p>
              </div>
              <CommentButton>
                <Input
                  disableUnderline
                  type="text"
                  placeholder="Add a comment..."
                />
                <span className="comment-btn">Post</span>
              </CommentButton>
            </Footer>
          </div>
        </Content>
      </Dialog>
    </Wrapper>
  );
};
