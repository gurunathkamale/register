import { Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import Register from "../components/register/Register"
import UserPage from "../pages/User"
import Layout from "../pages/Layout"



const AppRoute = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Layout/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/users" element={<UserPage/>}/>
        </Routes>
    </div>
  )
}

export default AppRoute