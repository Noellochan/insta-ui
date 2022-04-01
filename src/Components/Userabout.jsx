export const Usercrown = ({ data, post }) => {
  return (
    <div className="usercrown">
      <div>
        <img src={data?.post_image} alt="" />
      </div>
      <div>
        <div className="userinfo">
          <p>{data?.user_id?.full_name}</p>
          <div className="edit-profile">
            {data?.user_id?.id === localStorage.getItem("id")
              ? "Edit profile"
              : "Message"}
          </div>
        </div>
        <div className="userassets">
          <p>{post || 0} Post</p>

          <p>{data?.user_followers?.length || 0} followers</p>
          <p>{data?.user_following?.length || 0} following</p>
        </div>
        <div className="userabout"></div>
      </div>
    </div>
  );
};
