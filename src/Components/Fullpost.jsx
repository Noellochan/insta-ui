

import {BiDotsHorizontal } from 'react-icons/bi';

import {BsHeart } from 'react-icons/bs';
 import {FaRegComment } from 'react-icons/fa';
import {FaTelegramPlane } from 'react-icons/fa';

import {ImCross } from 'react-icons/im';



import { useDispatch, useSelector } from "react-redux"

import { post_popup } from "../Redux/action"
import  { useState,useEffect } from 'react';





export const Fullpost=()=>{
    const ispopup=useSelector((store)=>store.ispopup)


const [state,changstate]=useState(ispopup)

const dispatch=useDispatch()



dispatch(post_popup(state))

console.log(ispopup)

function close()
{
    changstate(false)
}
function open()
{
    changstate(true)
}


 
return state?(
   <div className="FullpostContainerpopup">
   
   
   <ImCross style={{float: "right",marginRight:"4%"}}/>
  
  

     <div className="FullpostContainer">

     <div><img src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688" alt="" /></div>

<div   className="Fullpostcommentsesctioncontainer">
<div className="randompostUsername">
    <div>
        <img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
<p>{"Kurkure"}</p>

    </div>

{/*the dot section */}
<div>
<BiDotsHorizontal/>
</div>


</div>

{/* this following div is for comment display */}
<div className= "Fullpostcommentsection">
    <div>comments</div>
</div>
<div className="randompostSharelike">
<div><BsHeart/><FaRegComment/><FaTelegramPlane/></div>
<div><svg aria-label="Save" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg></div>


</div>
</div>


     </div>




     </div>
):(<button  onClick={()=>{open()}}>Open it</button>)


}
