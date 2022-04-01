import { Usercrown } from "./Userabout";
import { Contentswitcher } from "./Contentswitcher";
import { Postsection } from "./UserPostssection";
import { useEffect, useState } from "react";
import axios from "axios";

export const UserProfile = () => {
  const [data, setData] = useState([]);

  let path = window.location.pathname.split("/");
  let id = path[path.length - 1];
  if (id === "me") id = localStorage.getItem("id");

  useEffect(() => {
    getAllPosts();
  }, []);
  const getAllPosts = () => {
    axios
      .get(`https://thebackendinsta.herokuapp.com/user/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => setData(res.data));
  };

  return (
    <>
      <Usercrown data={data?.[0]} post={data.length} />
      <Contentswitcher data={data} />
      <Postsection data={data} />
    </>
  );
};
