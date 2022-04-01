import { Button, Dialog, IconButton, Input } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { FaCross } from "react-icons/fa";
import { MdPhotoCamera } from "react-icons/md";
import { ImageCropper } from "../ImageCropper";
import { FieldWrapper, Wrapper } from "./styles";

export const PostContent = ({ open, onClose }) => {
  const [image, setImage] = useState("");
  const [postForm, setPostForm] = useState({
    post_location: "",
    post_caption: "",
    post_hashtag: "",
  });

  const addImage = (image) => {
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

    axios.post("https://thebackendinsta.herokuapp.com/post", payload);
  };

  return (
    <Dialog open={open} fullScreen onClose={onClose}>
      <Wrapper className="modal-wrapper">
        <FaCross onClick={onClose} />
        <label htmlFor="icon-button-file">
          <Input
            accept="image/*"
            id="icon-button-file"
            onChange={(e) => addImage(e.target.files[0])}
            type="file"
          />
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <MdPhotoCamera />
          </IconButton>
        </label>
        {image && <img src={image} alt="img" />}
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
        <Button variant="contained" type="primary" onClick={postData}>
          Share
        </Button>
        <Button variant="contained" type="secondary" onClick={onClose}>
          Cancel
        </Button>
      </Wrapper>
    </Dialog>
  );
};
