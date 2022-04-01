import {BiDotsHorizontal } from 'react-icons/bi';

import {BsHeart } from 'react-icons/bs';
 import {FaRegComment } from 'react-icons/fa';
import {FaTelegramPlane } from 'react-icons/fa';

import {GrEmoji } from 'react-icons/gr';


export const Randonpost=()=>{


return(

<div className='randompostContainer'>

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

<div className="randompostImage"><img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" /></div>

<div className="randompostSharelike">
<div><BsHeart/><FaRegComment/><FaTelegramPlane/></div>
<div><svg aria-label="Save" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg></div>


</div>
<div className='randomposttime' >
    <p>{"1 day ago"}</p>
    <hr style={{Color:"rgb(239,239,239)"}} />
</div>



<div className="randompostComment">
<GrEmoji style={{marginLeft:"10px"}}/>
    <input type="text" />
    <span style={{fontSize:"20px",marginRight:"10px"}}>Post</span>
     
</div>

</div>





)



}