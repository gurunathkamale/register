import axios from "axios";
// import { data } from "react-router-dom";


const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers:{
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
    Pragma: "no-cache",
    },
    timeout: 10000,
    withCredentials: true
}) 

//handle requests
axiosInstance.interceptors.request.use((config)=>{
      const dummyToken = "dummyToken123";

    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${dummyToken}`;
    console.log('Api Request', {
        url: config.url,
        method: config.method,
        headers: config.headers,
        data: config.data  //post payload 
    });
    return config
},
(error)=>{
   return Promise.reject(error)
}
)

//handle response
axiosInstance.interceptors.response.use(
    (response)=> response,
    (error)=>{
        console.error("Api Error", error.response?.status, error.message)
        return Promise.reject(error)
    }
)

export default axiosInstance