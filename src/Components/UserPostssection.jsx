import { useEffect, useState } from "react"

import axios from 'axios'
export const Postsection=()=>{

const [posts,setposts]=useState([

{
img:"https://cuteprofilepictures.weebly.com/uploads/2/1/8/5/21856578/8725169_orig.jpg",
id:"1"
},
{

    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7IFXH5YNUERdpOz7W76TTHPKe56mtQfFWaRuVLSNVS2spDMhkMAPBKyJ7oCrAhwf1i-I&usqp=CAU",
    id:"2"

}
])













// useEffect()




// function getposts()
// {
// axios.get("")



// }




return (

<div className="Userpostcontainer">
{posts.map((e)=><div className="userpostimages">{console.log(e.img,"ingg")}<img src={e.img} alt="" /></div>)}



</div>





)




}