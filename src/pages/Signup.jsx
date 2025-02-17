import axios from 'axios'
import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import url from '../url'
const Signup = () => {
  console.log(url)
 
    let nameRef = useRef()
    let emailRef = useRef()
    let passwordRef = useRef()
    let phoneRef=useRef()
    let passworConformdRef=useRef()

    let navigate = useNavigate()

    const handleSubmit = async()=>{
      let obj ={
        username:nameRef.current.value,
        email:emailRef.current.value,
        phone:phoneRef.current.value,
        password:passwordRef.current.value,
        confirmPassword:passworConformdRef.current.value
      }
      console.log(obj)
try {
    
    let res = await axios.post(url+'/member/signup',obj)
    console.log(res)
  //   console.log(res.data.msg)
  if(res.status==200 || res.status==201){
      navigate('/login')
      alert(res.data.msg)
  }
} catch (error) {
    console.log(error)
    alert(error.response.data.msg)
}
    }
  return (
    <>

      <div className=" flex h-[100vh] flex-col justify-center font-[sans-serif]  p-1">
  <div className=" max-w-md   py-2 w-full mx-auto border border-gray-300 rounded-2xl p-4">
    <div className="text-center text-white mt-2">
      <h1>Register Form</h1>
    </div>
    <form >
      <div className="space-y-2">
        <div>
          <label className="text-gray-800 text-sm  block">Name</label>
          <input ref={nameRef} name="text" type="text"
           className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2 rounded-md outline-blue-500" placeholder="Enter email" />
        </div>
        <div>
          <label className="text-gray-800 text-sm  block">Email</label>
          <input ref={emailRef} name="email" type="email" 
          className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2 rounded-md outline-blue-500" placeholder="Enter password" />
        </div>
        <div>
          <label className="text-gray-800 text-sm  block">phone</label>
          <input ref={phoneRef} name="phone" type="number" 
          className="text-gray-800 bg-white border
           border-gray-300 w-full text-sm px-4 py-2 rounded-md outline-blue-500" placeholder="Enter phone" />
        </div>
        <div>
          <label className="text-gray-800 text-sm  block">password</label>
          <input ref={passwordRef} name="password" type="password" 
          className="text-gray-800 bg-white border
           border-gray-300 w-full text-sm px-4 py-2 rounded-md outline-blue-500" placeholder="Enter password" />
        </div>
        <div>
          <label className="text-gray-800 text-sm m-2 block">confirm Password</label>
          <input ref={passworConformdRef} name="password" type="password" 
          className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-2 rounded-md outline-blue-500" 
          placeholder="Enter confirm password" />
        </div>
      
      </div>
      <div className="mt-9">
        <button onClick={handleSubmit} type="button" className="w-full py-2 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
          Create an account
        </button>
      </div>
      <p className="text-gray-800 text-sm mt-2 text-center">Already have an account? <Link to={"/login"} className="text-blue-600 font-semibold hover:underline ml-1">Login here</Link></p>
    </form>
  </div>
</div>

    </>
  )
}

export default Signup
