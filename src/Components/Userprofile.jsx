import { Usercrown } from './Userabout'
import { Contentswitcher } from './Contentswitcher';
import { Postsection } from './UserPostssection';
import { useSelector } from 'react-redux';




export const UserProfile=()=>{

let data=useSelector((store)=>store.userdetails)

console.log(data,"userdata")
return (

<>
<Usercrown/>
<Contentswitcher/>
<Postsection/>
</>

)






}