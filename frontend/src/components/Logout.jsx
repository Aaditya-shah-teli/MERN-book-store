import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

export const Logout = () => {
    const {logout} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleLogout = () =>{
        logout().then(()=>{
            alert("sign-out successfully");
            navigate(from, {replace:true})

        }).catch((err)=>{

        })
    }
  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
        <button className='bg-red-500 px-8 py-2 text-white rounded' onClick={handleLogout}>Logout</button>
    </div>
  )
}
