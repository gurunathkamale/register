import axiosInstance from "../api/axiosInstance"
import type { User } from "../types/user.types"


export const getUsers = async():Promise<User[]>=>{
    const response = await axiosInstance.get<User[]>('/posts');
    return response.data
}