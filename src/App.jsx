import React, { useContext } from 'react'
import Header from './component/Header'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import UserContext from './context/UserContext'
import ForgetAccount from './pages/forgetAccount'

const App = () => {
  const authCtx=useContext(UserContext)
  console.log(authCtx);
  const userLogin=authCtx?.userData?.isLogin
  
  return (
    <>
    
    <BrowserRouter>
    <Header/>
     <Routes>
      <Route path='/' element={userLogin===true?<Home/> :<Navigate to={"/login"}/>}/>
      <Route path='/sign-up' element={<Signup/>}/> 
      <Route path='/login' element={<Login/>}/> 
      <Route path='/forgetpass' element={<ForgetAccount/>}/>
      {/* <Route path="/forgotPassword" element={<ForgetPassword/>}/> */}

    </Routes>
   </BrowserRouter>
    
    </>
  )
}

export default App