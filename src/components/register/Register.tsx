import React, { useState } from "react"
import InputField from "../common/InputField"
import {  FaMailBulk,  FaUser } from "react-icons/fa"
import Button from "../common/Button"
import { FaUnlock } from "react-icons/fa6"


const Register = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword:''
    })

    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(user)
    }
  return (
    <div className=" min-h-screen flex items-center flex-col justify-center bg-gradient-to-br from-green-300 from-15% via-green-200 via-50% to-purple-200 to-35%">
        <h1 className="text-3xl text-center text-gray-600 pb-2">SignUp Form</h1>
        <div className="bg-white w-[360px] p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit}>
             <InputField
             type="text"
             label="Username"
             placeholder="username"
             value={user.username}
             icons={<FaUser/>}
             onChange={(value)=>setUser((prev)=>({
                ...prev,
                username: value
             }) 
        )}
             />
             <InputField
             type="email"
             label="Email"
             placeholder="email"
             value={user.email}
             icons={<FaMailBulk/>}
             onChange={(value)=>setUser((prev)=>({
                ...prev,
                email: value
             }) 
        )}
             />
             <InputField
             type="password"
             label="Password"
             placeholder="password"
             value={user.password}
             icons={<FaUnlock/>}
             onChange={(value)=>setUser((prev)=>({
                ...prev,
                password: value
             }) 
        )}
             />
             <InputField
             type="password"
             label="Re-enter Password"
             placeholder="confirm password"
             value={user.confirmPassword}
             icons={<FaUnlock/>}
             onChange={(value)=>setUser((prev)=>({
                ...prev,
                confirmPassword: value
             }) 
        )}
             />
               <Button type="submit" label="Register" />
                <div className="text-sm text-center">
                   Already have account ? <a href="#"> login</a>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register