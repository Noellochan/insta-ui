
import {Link} from 'react-router-dom'

import { FaBeer  ,FaTelegramPlane} from 'react-icons/fa';
import { AiFillHome } from "react-icons/ai";

import { FiSend } from "react-icons/fi"; 
import { BiSearch } from "react-icons/bi";
import { BsPlusSquare, BsHeart} from "react-icons/bs";
import { ImCompass2} from "react-icons/im";



export const Nav=()=>{


return( 
<>
<nav>
<div><Link to="/"><img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" /></Link> </div>
<div>  <BiSearch style={{marginLeft:"2%"}}/>  <input type="text" placeholder='Search' /></div>
<div>

<Link to="/"><AiFillHome style={{fontSize:"30px"}}/></Link>

<FiSend  style={{fontSize:"25px"}}/>
<BsPlusSquare/>
<ImCompass2/>
<BsHeart/>
<Link to="/userprofile"><img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt="" style={{height:"30px",width:"30px",borderRadius:"50%"}} />
</Link>
</div>
</nav>






</>




)






}