import { Dispatch } from "react"
import { CreatePostApi, DeletePostApi, GetPostApi, GetPostsApi, UpdatePostApi } from "../../api/post"
import { UpdatePostDTO } from "../../types/DTOs/PostDTOs/UpdatePostDTO"
import { CreatePost, CreatePostFailure, DeletePost, DeletePostFailure, GetPosts, GetPostsFailure, GetPostsSuccess, GetViewPost, GetViewPostFailure, GetViewPostSuccess, PostAction } from "../actions/postAction"

export const fetchPosts = () =>
    async (dispatch: Dispatch<PostAction>) => {
        dispatch(GetPosts())
        var result = await GetPostsApi()
        if (result.status >= 200 && result.status <= 205) {
            dispatch(GetPostsSuccess(result.data))
            return
        }
        dispatch(GetPostsFailure(result.statusText))


    }


export const fetchPost = (id: number) => async (dispatch: Dispatch<PostAction>) => {
    dispatch(GetViewPost())
    var result = await GetPostApi(id)
    if (result.status == 200) {
        dispatch(GetViewPostSuccess(result.data))
        return
    }
    dispatch(GetViewPostFailure(result.statusText))
}
export const deletePost = (id: number) => async (dispatch: any) => {
    dispatch(DeletePost())
    var result = await DeletePostApi(id)
    if (result.status >= 200 && result.status <= 205) {
        dispatch(fetchPosts())
        return
    }
    dispatch(DeletePostFailure(result.data))
}

export const createPost = (userId:number,id: number) => async (dispatch: any) => {
    dispatch(CreatePost())
    var result = await CreatePostApi(userId,id)
    if (result.status >= 200 && result.status <= 205) {
        dispatch(fetchPosts())
        return
    }
    dispatch(CreatePostFailure(result.data))
}

export const updatePost = (post: UpdatePostDTO) => async (dispatch: any) => {
    dispatch(CreatePost())
    var result = await UpdatePostApi(post)
    if (result.status >= 200 && result.status <= 205) {
        dispatch(fetchPosts())
        return
    }
    dispatch(CreatePostFailure(result.data))
}