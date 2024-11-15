import React, { useContext } from 'react'
import {UserContext}  from "../../context/UserProvider"
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const LayoutRequireAuth = () => {
const {user}= useContext(UserContext);
if(!user){
    return<Navigate to="/login" />
}
    
  return (
    <div className='container mex-auto'><Oulet/></div>
  )
}

export default LayoutRequireAuth