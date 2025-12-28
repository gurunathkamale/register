import axios from "axios";


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
    console.log('Api Request', config.url);
    return config
},
(error)=>{
    Promise.reject(error)
}
)

//handle response
axiosInstance.interceptors.response.use(
    (response)=> response,
    (error)=>{
        console.error("Api Error", error)
        return Promise.reject(error)
    }
)

export default axiosInstance