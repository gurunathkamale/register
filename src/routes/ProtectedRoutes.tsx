import type { JSX } from "react"
import { auth } from "../utilitis/auth"
import { Navigate } from "react-router-dom"

type protectedRouteProps ={
  children: JSX.Element
}

const ProtectedRoutes: React.FC<protectedRouteProps> = ({children}) => {

  if(!auth.isAuthenticated){
    return <Navigate to='/login' replace/>
  }
  return children
}

export default ProtectedRoutes