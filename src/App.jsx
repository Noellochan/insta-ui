import logo from './logo.svg';
import './Components/CSS/Navbar.css'
import './Components/CSS/Usercrown.css'
import './Components/CSS/ContentSwitch.css'
import './Components/CSS/Randomposts.css'
import './Components/CSS/fullpost.css'
import './Components/CSS/Userpostsection.css'
import './Components/CSS/Signup.css'
import { Nav } from './Components/Navbar';
import './Components/CSS/Login.css'

import { Randonpost } from './Components/Homecomponets/Randomposts';
import { Fullpost } from './Components/Fullpost';
import { Login } from './Components/Login';
import {UserProfile} from './Components/Userprofile'
import { Signup } from './Components/Signup';
import {Route, Routes} from 'react-router-dom'
function App() {
  return (
   <>
   <Nav  />
 

   <Routes>
   <Route exact path='/userprofile' element={<UserProfile/>}></Route>
   <Route exact path='/' element={<Randonpost/>}></Route>
   <Route exact path='/login' element={<Login/>}></Route>
   <Route exact path='/signup' element={<Signup/>}></Route>

</Routes>

   <Fullpost/>

   </>
  );
}

export default App;
