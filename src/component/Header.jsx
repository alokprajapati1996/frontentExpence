import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext'

const Header = () => {
  const authCtx=useContext(UserContext)
  console.log(authCtx);
  const userLogin=authCtx?.userData?.isLogin;
  
  const handleLogout=()=>{
    authCtx.setUserData({...authCtx.userData,isLogin:false})
     localStorage.removeItem("auth")
  }
  return (
    <>
    <div className='bg-amber-300 w-full flex fixed h-10 justify-around p-2 '>
        <h1 className=''>ExpenceTracker</h1>
            <ul className='flex gap-7 '>
                <li><Link to={"/"}>Home</Link></li>
               { userLogin===false && <> <li><Link to={"/login"}>Login</Link></li>
                <li><Link to={"/sign-up"}>Signup</Link></li></>}
          
            </ul>
            {userLogin===true && <button onClick={handleLogout}>Logout</button>}
        
        </div>
    </>
  )
}

export default Header