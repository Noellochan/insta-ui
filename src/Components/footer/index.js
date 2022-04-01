import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { AiFillHome } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { BsHeart, BsPlusSquare } from "react-icons/bs";
import { ImCompass2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "./styles";

export default function Footer() {
  const [value, setValue] = React.useState("recents");
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
          icon={<ImCompass2 fontSize={"22px"} />}
        />
        <BottomNavigationAction
          label=""
          value="nearby"
          icon={<BsPlusSquare fontSize={"22px"} />}
        />
        <BottomNavigationAction
          label=""
          value="folder"
          icon={<BsHeart fontSize={"22px"} />}
          onClick={() => navigate("/userprofile/me")}
        />
      </BottomNavigation>
    </Wrapper>
  );
}
