import { Navigate, Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import Register from "../components/register/Register"




import Layout from "../pages/Layout"
import UserContainer from "../pages/UserContainer"
import UserPage from "../pages/User"
import PostUser from "../pages/PostUser"




import ProtectedRoutes from "./ProtectedRoutes"
import Home from "../pages/Home"



const AppRoute = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
         {/* public routes */}
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/register" element={<Register/>}/>

           
           {/* Layout Routes */}
           <Route  element={<Layout/>}>
            <Route  element={<UserContainer/>}>
            
             <Route path="/users" element={<UserPage/>}/>
            <Route path="/createdata" element={<PostUser />} /> 
            </Route>
           </Route>


            <Route path="/users" element={<UserPage/>}/>

            <Route path="/" element={<ProtectedRoutes>
              <Home/>
            
            </ProtectedRoutes>}/>


        </Routes>
    </div>
  )
}

export default AppRoute
