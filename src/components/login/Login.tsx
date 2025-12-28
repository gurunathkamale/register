import React, { useState } from "react";
import InputField from "../common/InputField";
import { FaLock, FaUser } from "react-icons/fa";
import Button from "../common/Button";

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(!email.trim() || !password.trim()) return alert("Enter email and password")
        if(password.length < 6) return alert ("Enter password min 6 characters")


        console.log({
            Email: email,
            Password: password
        })
        setEmail("");
        setPassword("")
      
    }
  return (
        <div className=" min-h-screen flex items-center flex-col justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Good To see You Again
      </h1>
      <div className="bg-white w-[360px] p-8 rounded-xl shadow-lg">
        <form onSubmit={handleSubmit}>
          <InputField
            type="email"
            label="Your email"
            placeholder="Enter your Email"
            icons={<FaUser />}
            value={email}
            onChange={setEmail}
        
          />
          <InputField
            type="password"
            label="Your password"
            placeholder="Enter user Password"
            icons={<FaLock />}
            value={password}
            onChange={setPassword}
          />

          <Button type="submit" label="Submit"/>
          
           
          <div className="mt-4 flex justify-between text-sm text-blue-500 underline">
            <a href="#">Don't have an account?</a>
            <a href="#">Forget password</a>
          </div>
        </form>
      </div>
    </div>
    // </div>
    // </div>
    //  </div>
  );
};

export default Login;
