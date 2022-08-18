import { PostDTO } from "../../types/DTOs/PostDTOs/PostDTO"
import { PostViewDTO } from "../../types/DTOs/PostDTOs/PostViewDTO"
import { UpdatePostDTO } from "../../types/DTOs/PostDTOs/UpdatePostDTO"

export enum PostActionType {
    Set_Current_Update_Post = "Set_Current_Update_Post",

    Get_Posts = "Get_Posts",
    Get_Posts_Success = "Get_Posts_Success",
    Get_Posts_Failure = "Get_Posts_Failure",

    Get_View_Post = "Get_View_Post",
    Get_View_Post_Success = "Get_View_Post_Success",
    Get_View_Post_Failure = "Get_View_Post_Failure",

    Delete_Post = "Delete_Post",
    Delete_Post_Success = "Delete_Post_Success",
    Delete_Post_Failure = "Delete_Post_Failure",

    Create_Post = "Create_Post",
    Create_Post_Success = "Create_Post_Success",
    Create_Post_Failure = "Create_Post_Failure",

    Update_Post = "Update_Post",
    Update_Post_Success = "Update_Post_Success",
    Update_Post_Failure = "Update_Post_Failure",
}

interface SetCurrentUpdatePost {
    type: PostActionType.Set_Current_Update_Post
    post: PostDTO
}
export const SetCurrentUpdatePost = (post:PostDTO): SetCurrentUpdatePost => ({
    type: PostActionType.Set_Current_Update_Post,
    post
})

export interface GetPosts {
    type: PostActionType.Get_Posts
}
export const GetPosts = (): GetPosts => ({
    type: PostActionType.Get_Posts
})
export interface GetPostsSuccess {
    type: PostActionType.Get_Posts_Success
    posts: PostDTO[]
}
export const GetPostsSuccess = (posts:PostDTO[]): GetPostsSuccess => ({
    type: PostActionType.Get_Posts_Success,
    posts
})
export interface GetPostsFailure {
    type: PostActionType.Get_Posts_Failure
    error: string
}
export const GetPostsFailure = (error:string): GetPostsFailure => ({
    type: PostActionType.Get_Posts_Failure,
    error
})

export interface GetViewPost {
    type: PostActionType.Get_View_Post
}
export const GetViewPost = (): GetViewPost => ({
    type: PostActionType.Get_View_Post
})
export interface GetViewPostSuccess {
    type: PostActionType.Get_View_Post_Success
    post: PostViewDTO
}
export const GetViewPostSuccess = (post: PostViewDTO): GetViewPostSuccess => ({
    type: PostActionType.Get_View_Post_Success,
    post
})
export interface GetViewPostFailure {
    type: PostActionType.Get_View_Post_Failure
    error: string
}
export const GetViewPostFailure = ( error: string): GetViewPostFailure => ({
    type: PostActionType.Get_View_Post_Failure,
    error
})

export interface DeletePost {
    type: PostActionType.Delete_Post
}
export const DeletePost = (): DeletePost => ({
    type: PostActionType.Delete_Post
})
export interface DeletePostSuccess {
    type: PostActionType.Delete_Post_Success
}
export const DeletePostSuccess = (): DeletePostSuccess => ({
    type: PostActionType.Delete_Post_Success
})
export interface DeletePostFailure {
    type: PostActionType.Delete_Post_Failure
    error: string
}
export const DeletePostFailure = (error: string): DeletePostFailure => ({
    type: PostActionType.Delete_Post_Failure,
    error
})

export interface CreatePost {
    type: PostActionType.Create_Post
}
export const CreatePost = (): CreatePost => ({
    type: PostActionType.Create_Post
})
export interface CreatePostSuccess {
    type: PostActionType.Create_Post_Success
}
export const CreatePostSuccess = (): CreatePostSuccess => ({
    type: PostActionType.Create_Post_Success
})
export interface CreatePostFailure {
    type: PostActionType.Create_Post_Failure
    error: string
}
export const CreatePostFailure = (error: string): CreatePostFailure => ({
    type: PostActionType.Create_Post_Failure,
    error
})

export interface UpdatePost {
    type: PostActionType.Update_Post
}
export const UpdatePost = (): UpdatePost => ({
    type: PostActionType.Update_Post
})
export interface UpdatePostSuccess {
    type: PostActionType.Update_Post_Success
}
export const UpdatePostSuccess = (): UpdatePostSuccess => ({
    type: PostActionType.Update_Post_Success
})
export interface UpdatePostFailure {
    type: PostActionType.Update_Post_Failure
    error: string
}
export const UpdatePostFailure = (error: string): UpdatePostFailure => ({
    type: PostActionType.Update_Post_Failure,
    error
})

export type PostAction =
    GetPosts |
    GetPostsSuccess |
    GetPostsFailure |
    GetViewPost |
    GetViewPostSuccess |
    GetViewPostFailure |
    SetCurrentUpdatePost