import { useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineMapsUgc } from "react-icons/md";
import { Link } from "react-router-dom";
import { PostContent } from "./PostContent";

export const Nav = () => {
  const [openPostModal, setOpenPostModal] = useState(false);

  return (
    <>
      <nav>
        <div>
          <BsInstagram
            fontSize={"25px"}
            onClick={() => setOpenPostModal(true)}
          />
        </div>
        <div>
          <Link to="/">
            <img
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <MdOutlineMapsUgc fontSize={"25px"} />
        </div>
      </nav>
      <PostContent
        open={openPostModal}
        onClose={() => setOpenPostModal(false)}
      />
    </>
  );
};
