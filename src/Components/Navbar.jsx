import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

import { FiSend } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { BsPlusSquare, BsHeart } from "react-icons/bs";
import { ImCompass2 } from "react-icons/im";
import { useState } from "react";
import { PostContent } from "./PostContent";

export const Nav = () => {
  const [openPostModal, setOpenPostModal] = useState(false);

  return (
    <>
      <nav>
        <div>
          <Link to="/">
            <img
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt=""
            />
          </Link>{" "}
        </div>
        <div>
          {" "}
          <BiSearch style={{ marginLeft: "2%" }} />{" "}
          <input type="text" placeholder="Search" />
        </div>
        <div>
          <Link to="/">
            <AiFillHome style={{ fontSize: "30px" }} />
          </Link>
          <FiSend style={{ fontSize: "25px" }} />
          <BsPlusSquare onClick={() => setOpenPostModal(true)} />
          <ImCompass2 />
          <BsHeart />
          <Link to="/userprofile/me">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              alt=""
              style={{ height: "30px", width: "30px", borderRadius: "50%" }}
            />
          </Link>
        </div>
      </nav>
      <PostContent
        open={openPostModal}
        onClose={() => setOpenPostModal(false)}
      />
    </>
  );
};
