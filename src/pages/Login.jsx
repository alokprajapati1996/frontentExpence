import axios from 'axios'
import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../context/UserContext'
import url from '../url'

const Login = () => {
    const authCtx=useContext(UserContext)
  console.log(authCtx);
  
    let emailRef = useRef()
    let passwordRef = useRef()

    let navigate = useNavigate()

    const handleSubmit = async(e)=>{
      e.preventDefault()
      let obj ={
    
        email:emailRef.current.value,
        password:passwordRef.current.value
      }
      console.log(obj)
try {
    
    let res = await axios.post(url+'/member/login',obj)
    console.log(res)
    console.log(res.data.msg)
  if(res.status==200 || res.status==201){

    localStorage.setItem('auth',JSON.stringify({isLogin:true,user:res.data.user}))
    authCtx.setUserData({...authCtx.userData,isLogin:true})
      navigate('/home')
      alert(res.data.msg)
  }
} catch (error) {
    console.log(error)
    alert(error.response.data.msg)
}
    }
  return (
    <>
    <div>
      <div className="flex flex-col h-[80vh] justify-center font-[sans-serif] sm:h-screen p-4">
  <div className="max-w-md w-full  h-[80vh] mx-auto border border-gray-300 rounded-2xl p-8">
    <div className="text-center mb-12">
        <h1>Login Form</h1>
          </div>
    <form>
      <div className="space-y-6">
                <div>
          <label className="text-gray-800 text-sm mb-2 block">Email</label>
          <input ref={emailRef} name="email" type="email" 
          className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" 
          placeholder="Enter email..." />
        </div>
        
        <div>
          <label className="text-gray-800 text-sm mb-2 block">Password</label>
          <input ref={passwordRef} name="password" type="password" 
          className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-blue-500" 
          placeholder="Enter password..." />
        </div>
        <div class="text-sm">
                  <Link to={"/forgotPassword"} className="text-blue-600 hover:underline font-semibold">
                    Forgot your password?
                  </Link>
                </div>

      </div>
      <div className="!mt-8">
        <button onClick={handleSubmit} type="button" className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
          login
        </button>
      </div>
      <p className="text-gray-800 text-sm mt-6 text-center">
        
        <Link to={"/forgetpass"} className="text-blue-600 font-semibold hover:underline ml-1">forgotton account?.</Link>
   
         <Link to={"/sign-up"} className="text-blue-600 font-semibold hover:underline ml-1">sign up for expence tracker</Link></p>
    </form>
  </div>
</div>

    </div>
    </>
  )
}

export default Login
