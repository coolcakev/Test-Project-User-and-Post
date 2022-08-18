import axios from "axios";
import { BaseApi } from ".";
import { PostDTO } from "../types/DTOs/PostDTOs/PostDTO";
import { PostViewDTO } from "../types/DTOs/PostDTOs/PostViewDTO";
import { UpdatePostDTO } from "../types/DTOs/PostDTOs/UpdatePostDTO";

const postApi = `${BaseApi}/posts`
export const GetPostsApi = () =>
    axios.get<PostDTO[]>(postApi);
export const GetPostApi = (id: number) =>
    axios.get<PostViewDTO>(`${postApi}/${id}`);
export const DeletePostApi = (id: number) =>
    axios.delete(`${postApi}/${id}`);
export const CreatePostApi = (userId:number,id: number) =>{
    const url=`${postApi}/${userId}/${id}`
    return axios.post(url);
}  
export const UpdatePostApi = (post: UpdatePostDTO) =>
    axios.put(`${postApi}/${post.id}`, post);