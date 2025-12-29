export interface User {
    id: number | null,
    title: string,
    body: string
    userId?: number
}

export interface CreatePayloadPost {
    userId: number | null,
    title: string,
    body: string,
    
}

export interface Post{
    userId: number,
    title: string,
    body: string,
    id: number | null
}