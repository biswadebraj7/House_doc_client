import React, { useContext } from 'react'
import { ContextProvider } from '../Provider/ProviderContext'
import { Navigate, useLocation } from 'react-router-dom'

const ClientPrivate = ({children}) => {
    const {user, loading}=useContext(ContextProvider)
    const loaction =useLocation()
    if(loading){
      return <span className="loading loading-dots loading-lg"></span>
    }
    if(user){
      return children;
    }
  return <Navigate to={'/login'} state={{from:loaction}} replace></Navigate>
  
}

export default ClientPrivate
