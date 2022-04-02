import { Button, Dialog, Divider, IconButton, Input } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { MdClose, MdPhotoCamera } from "react-icons/md";
import { ButtonWrapper, FieldWrapper, Wrapper } from "./styles";
import Loader from "../../Components/assests/loader.gif";
import { useNavigate } from "react-router-dom";

const initialState = {
  post_location: "",
  post_caption: "",
  post_hashtag: "",
};

export const PostContent = ({ open, onClose, fetchData }) => {
  const [image, setImage] = useState("");
  const [postForm, setPostForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addImage = (image) => {
    setLoading(true);
    const imagedata = new FormData();
    imagedata.append("file", image);
    imagedata.append("upload_preset", "insta-clone");
    imagedata.append("cloud_name", "walsonferrrao");
    axios
      .post(
        "https://api.cloudinary.com/v1_1/walsonferrao/image/upload",
        imagedata
      )
      .then((res) => {
        setImage(res.data.url);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const postData = () => {
    const payload = {
      ...postForm,
      post_image: image,
      user_id: localStorage.getItem("id"),
    };

    axios
      .post("https://thebackendinsta.herokuapp.com/post", payload)
      .then((res) => {
        window.location = "/";
      });
  };

  return (
    <Dialog open={open} fullWidth maxWidth="md" onClose={onClose}>
      <Wrapper image={image} className="modal-wrapper">
        <MdClose
          className="close-icon"
          onClick={() => {
            setImage("");
            setPostForm(initialState);
            onClose();
          }}
          fontSize="22px"
        />
        <div className="left-container">
          {loading && <img src={Loader} alt="loading..." />}
          {!image && !loading && (
            <label htmlFor="icon-button-file">
              <Input
                className="image-upload"
                accept="image/*"
                id="icon-button-file"
                onChange={(e) => addImage(e.target.files[0])}
                type="file"
              />
              <div className="image-icon-wrapper">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <MdPhotoCamera />
                </IconButton>
              </div>
            </label>
          )}
          {image && <img className="uploaded-img" src={image} alt="img" />}
        </div>
        <Divider className="divider" flexItem />
        <div className="right-container">
          <FieldWrapper>
            <p>Location</p>
            <Input
              disableUnderline
              className="primary-input"
              type="text"
              value={postForm.post_location}
              onChange={(e) =>
                setPostForm({ ...postForm, post_location: e.target.value })
              }
            />
          </FieldWrapper>
          <FieldWrapper>
            <p>Hashtag</p>
            <Input
              disableUnderline
              className="primary-input"
              type="text"
              value={postForm.post_hashtag}
              onChange={(e) =>
                setPostForm({ ...postForm, post_hashtag: e.target.value })
              }
            />
          </FieldWrapper>
          <FieldWrapper>
            <p>Caption</p>
            <Input
              disableUnderline
              className="primary-input"
              type="text"
              value={postForm.post_caption}
              onChange={(e) =>
                setPostForm({ ...postForm, post_caption: e.target.value })
              }
            />
          </FieldWrapper>
          <ButtonWrapper>
            <Button
              disabled={!image}
              variant="contained"
              color="success"
              type="primary"
              onClick={postData}
            >
              Share
            </Button>
            <Button
              variant="contained"
              color="error"
              type="secondary"
              onClick={() => {
                setImage("");
                setPostForm(initialState);
                onClose();
              }}
            >
              Cancel
            </Button>
          </ButtonWrapper>
        </div>
      </Wrapper>
    </Dialog>
  );
};
