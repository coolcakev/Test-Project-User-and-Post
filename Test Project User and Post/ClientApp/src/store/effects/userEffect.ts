import { Dispatch } from "react";
import { AnyAction } from "redux";
import { CreateUserApi, DeleteUserApi, GetUserApi, GetUsersApi } from "../../api/user";
import { useAppDispatch } from "../../hooks/useTypedSelector";
import { CreateUser, CreateUserFailure, DeleteUser, DeleteUserFailure, GetUsers, GetUsersFailure, GetUsersSuccess, GetViewUser, GetViewUserFailure, GetViewUserSuccess, UserAction } from "../actions/userAction";

export const fetchUsers = () =>
    async (dispatch: Dispatch<UserAction>) => {
        dispatch(GetUsers())
        var result = await GetUsersApi()
        if (result.status >= 200 && result.status <= 205) {
            dispatch(GetUsersSuccess(result.data))
            return
        }
        dispatch(GetUsersFailure(result.statusText))


    }


export const fetchUser = (id: number) => async (dispatch: Dispatch<UserAction>) => {
    dispatch(GetViewUser())
    var result = await GetUserApi(id)
    if (result.status == 200) {
        dispatch(GetViewUserSuccess(result.data))
        return
    }
    dispatch(GetViewUserFailure(result.statusText))
}
export const deleteUser = (id: number) => async (dispatch: any) => {
    dispatch(DeleteUser())
    var result = await DeleteUserApi(id)
    if (result.status >= 200 && result.status <= 205) {
        dispatch(fetchUsers())
        return
    }
    dispatch(DeleteUserFailure(result.data))
}

export const createUser = (id: number) => async (dispatch: any) => {
    dispatch(CreateUser())
    var result = await CreateUserApi(id)
    if (result.status >= 200 && result.status <= 205) {
        dispatch(fetchUsers())
        return
    }
    dispatch(CreateUserFailure(result.data))
}