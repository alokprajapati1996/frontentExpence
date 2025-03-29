import axios from 'axios'
import React, { useRef} from 'react'
import {useNavigate } from 'react-router-dom'
import url from '../url'

const ForgetAccount = () => {
    let emailRef=useRef()
    //const[booleanV,setBoolean]=useState(false)
let navigate=useNavigate()
    const handleSearch=async(e)=>{
        e.preventDefault()
        const obj={
            email:emailRef.current?.value
        }
        try{
        let res=await axios.post(url+"/member/password-reset",obj)
        console.log(res)
        if(res.data.success){
            alert(res.data.msg)
           emailRef.current.value=""
        }else{
            alert(res.data.msg)
        }
    }
    catch(error){
console.log(error)

    }
    }

  return (
    <>

   <div className="space-y-6 font-[sans-serif] max-w-md mx-auto p-5 mt-10">
    <form>
   <div>
    <div>
    <label className="mb-2 text-sm text-black block">Enter Your Email...</label>
    
    <div className="relative flex items-center">
      <input type="eamil" name='email' placeholder="Enter email..." ref={emailRef} className="pr-4 pl-14 py-3 text-sm text-black rounded bg-white border 
      border-gray-400 w-full outline-[#333]" />
      <div className="absolute left-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="22px" height="22px" fill="#bbb" viewBox="0 0 512 512">
          <path d="M298.789 313.693c-12.738 8.492-27.534 12.981-42.789 12.981-15.254 0-30.05-4.489-42.788-12.981L3.409 173.82A76.269 76.269 0 0 1 0 171.403V400.6c0 26.278 21.325 47.133 47.133 47.133h417.733c26.278 0 47.133-21.325 47.133-47.133V171.402a75.21 75.21 0 0 1-3.416 2.422z" data-original="#000000" />
          <path d="m20.05 148.858 209.803 139.874c7.942 5.295 17.044 7.942 26.146 7.942 9.103 0 18.206-2.648 26.148-7.942L491.95 148.858c12.555-8.365 20.05-22.365 20.05-37.475 0-25.981-21.137-47.117-47.117-47.117H47.117C21.137 64.267 0 85.403 0 111.408a44.912 44.912 0 0 0 20.05 37.45z" data-original="#000000" />
        </svg>
      </div>
    </div>
    </div>
      
        <button className='bg-orange-500 p-2 w-full mt-4 rounded-md'onClick={handleSearch}> search</button>
        {/* <button className='bg-orange-500 p-2 w-full mt-4 rounded-md'><Link to={"/login"}> continew</Link></button> */}
   
    
    

  </div>
  </form>
</div>



</>
  )
}

export default ForgetAccount