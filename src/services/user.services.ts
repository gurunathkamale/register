import axiosInstance from "../api/axiosInstance"
import type { CreatePayloadPost, Post, User } from "../types/user.types"


export const getUsers = async():Promise<User[]>=>{
    const response = await axiosInstance.get<User[]>('/posts');
    return response.data;
}

export const postData = async(payload: CreatePayloadPost):Promise<Post>=>{
    const response = await axiosInstance.post<Post>("/posts", payload)
    return response.data
}