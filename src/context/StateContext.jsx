import React, { useState } from 'react'
import UserContext from './UserContext'

const StateContext = (props) => {
    const details=JSON.parse(localStorage.getItem("auth"))
    
    const [userData,setUserData]=useState({
        user:details? details.user:null,
        isLogin:details ? details.isLogin : false
    })
  return (
    <>
    <UserContext.Provider value={{userData,setUserData}}>
        {props.children}
    </UserContext.Provider>
    
    </>
  )
}
export default StateContext