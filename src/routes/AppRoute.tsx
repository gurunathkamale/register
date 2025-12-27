import { Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import Register from "../components/register/Register"


const AppRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </div>
  )
}

export default AppRoute