import { Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import Register from "../components/register/Register"
import ProtectedRoutes from "./ProtectedRoutes"
import Home from "../pages/Home"


const AppRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/" element={<ProtectedRoutes>
              <Home/>
            
            </ProtectedRoutes>}/>
        </Routes>
    </div>
  )
}

export default AppRoute