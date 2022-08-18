import { UserDTO } from "../../types/DTOs/UserDTOs/UserDTO"
import { UserViewDTO } from "../../types/DTOs/UserDTOs/UserViewDTO"

export enum UserActionType {
    Set_Current_Update_User = "Set_Current_Update_User",

    Get_Users = "Get_Users",
    Get_Users_Success = "Get_Users_Success",
    Get_Users_Failure = "Get_Users_Failure",

    Create_User = "Create_User",
    Create_User_Success = "Create_User_Success",
    Create_User_Failure = "Create_User_Failure",

    Delete_User = "Delete_User",
    Delete_User_Success = "Delete_User_Success",
    Delete_User_Failure = "Delete_User_Failure",

    Get_View_User = "Get_View_User",
    Get_View_User_Success = "Get_View_User_Success",
    Get_View_User_Failure = "Get_View_User_Failure",
}
interface SetCurrentUpdateUser {
    type: UserActionType.Set_Current_Update_User
    user: UserDTO
}
export const SetCurrentUpdateUser = (user:UserDTO): SetCurrentUpdateUser => ({
    type: UserActionType.Set_Current_Update_User,
    user
})

export interface GetUsers {
    type: UserActionType.Get_Users
}
export const GetUsers = (): GetUsers => ({
    type: UserActionType.Get_Users
})
export interface GetUsersSuccess {
    type: UserActionType.Get_Users_Success
    users: UserDTO[]
}
export const GetUsersSuccess = (users: UserDTO[]): GetUsersSuccess => ({
    type: UserActionType.Get_Users_Success,
    users
})
export interface GetUsersFailure {
    type: UserActionType.Get_Users_Failure
    error: string
}
export const GetUsersFailure = (error: string): GetUsersFailure => ({
    type: UserActionType.Get_Users_Failure,
    error
})

export interface GetViewUser {
    type: UserActionType.Get_View_User
}
export const GetViewUser = (): GetViewUser => ({
    type: UserActionType.Get_View_User
})
export interface GetViewUserSuccess {
    type: UserActionType.Get_View_User_Success
    user: UserViewDTO
}
export const GetViewUserSuccess = (user: UserViewDTO): GetViewUserSuccess => ({
    type: UserActionType.Get_View_User_Success,
    user
})
export interface GetViewUserFailure {
    type: UserActionType.Get_View_User_Failure
    error: string
}
export const GetViewUserFailure = (error: string): GetViewUserFailure => ({
    type: UserActionType.Get_View_User_Failure,
    error
})


export interface DeleteUser {
    type: UserActionType.Delete_User
}
export const DeleteUser = (): DeleteUser => ({
    type: UserActionType.Delete_User
})
export interface DeleteUserSuccess {
    type: UserActionType.Delete_User_Success
}
export const DeleteUserSuccess = (): DeleteUserSuccess => ({
    type: UserActionType.Delete_User_Success
})
export interface DeleteUserFailure {
    type: UserActionType.Delete_User_Failure
    error: string
}
export const DeleteUserFailure = (error: string): DeleteUserFailure => ({
    type: UserActionType.Delete_User_Failure,
    error
})

export interface CreateUser {
    type: UserActionType.Create_User
}
export const CreateUser = (): CreateUser => ({
    type: UserActionType.Create_User
})
export interface CreateUserSuccess {
    type: UserActionType.Create_User_Success
}
export const CreateUserSuccess = (): CreateUserSuccess => ({
    type: UserActionType.Create_User_Success
})
export interface CreateUserFailure {
    type: UserActionType.Create_User_Failure
    error: string
}
export const CreateUserFailure = (error: string): CreateUserFailure => ({
    type: UserActionType.Create_User_Failure,
    error
})

export type UserAction =
    GetUsers |
    GetUsersSuccess|
    GetUsersFailure|
    GetViewUser|
    GetViewUserSuccess|
    GetViewUserFailure|
    DeleteUser|
    DeleteUserSuccess|
    DeleteUserFailure|
    CreateUser|
    CreateUserSuccess|
    CreateUserFailure|
    SetCurrentUpdateUser