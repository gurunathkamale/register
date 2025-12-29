import { Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import Register from "../components/register/Register"

import UserPage from "../pages/User"
import Layout from "../pages/Layout"


import ProtectedRoutes from "./ProtectedRoutes"
import Home from "../pages/Home"



const AppRoute = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Layout/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<Register/>}/>

            <Route path="/users" element={<UserPage/>}/>

            <Route path="/" element={<ProtectedRoutes>
              <Home/>
            
            </ProtectedRoutes>}/>

        </Routes>
    </div>
  )
}

export default AppRoute