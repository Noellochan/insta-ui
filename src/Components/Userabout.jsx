import { IoIosSettings } from "react-icons/io";
import { useSelector } from "react-redux";

export const Usercrown=()=>{
    const userdetails=useSelector((store)=>store.userdetails)

console.log(userdetails)
return(




<div className="usercrown">


<div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWMVRCd_swu_YWZ2NT7RNxyEJatynGsYRdag&usqp=CAU" alt="" /></div>
<div>
<div className="userinfo">
    <p>{userdetails.user_name}</p>
    <button>Edit Profile</button>
    <IoIosSettings className="settingicon"/>
    
</div>
<div className="userassets">
    <p>{1} Post</p>

    <p>{0} followers</p>
    <p>{2} following</p>
</div>
<div className="userabout">
    {"Hi i am Noello I am  rich and i like  limejuice . Please contact me for freelancing"}
</div>
</div>


</div>



)




}