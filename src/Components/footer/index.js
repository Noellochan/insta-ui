import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { AiFillHome } from "react-icons/ai";
import { BsHeart, BsPlusSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./styles";
import { BiSearch } from "react-icons/bi";
import { Avatar } from "@mui/material";
import { PostContent } from "../PostContent";

export default function Footer() {
  const [value, setValue] = React.useState("recents");
  const [openPostModal, setOpenPostModal] = React.useState(false);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <BottomNavigation
        sx={{ width: "100%" }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          label=""
          value="recents"
          icon={<AiFillHome fontSize={"22px"} />}
          onClick={() => navigate("/")}
        />
        <BottomNavigationAction
          label=""
          value="favorites"
          icon={<BiSearch fontSize={"22px"} />}
        />
        <BottomNavigationAction
          label=""
          value="nearby"
          icon={<BsPlusSquare fontSize={"22px"} />}
          onClick={() => setOpenPostModal(true)}
        />
        <BottomNavigationAction
          label=""
          value="folder"
          icon={<BsHeart fontSize={"22px"} />}
        />
        <BottomNavigationAction
          label=""
          value="about"
          icon={<Avatar className="avatar">W</Avatar>}
          onClick={() => navigate("/userprofile/me")}
        />
      </BottomNavigation>
      <PostContent
        open={openPostModal}
        onClose={() => setOpenPostModal(false)}
      />
    </Wrapper>
  );
}
