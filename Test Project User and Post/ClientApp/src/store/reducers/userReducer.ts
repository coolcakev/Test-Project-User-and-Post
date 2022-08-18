import { UserDTO } from "../../types/DTOs/UserDTOs/UserDTO";
import { UserViewDTO } from "../../types/DTOs/UserDTOs/UserViewDTO";
import { UserAction, UserActionType } from "../actions/userAction";

interface UserState {
    users: UserDTO[],
    currentViewUser: UserViewDTO | null,
    curentSelectedUser:UserDTO|null,
    error: string | null,
    loading: boolean,
    currentViewUserLoading: boolean,
}
const userInitialState: UserState = {
    users: [],
    currentViewUser: null,
    curentSelectedUser:null,
    error: null,
    loading: false,
    currentViewUserLoading: false,
}

export const userReducer = (state = userInitialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionType.Set_Current_Update_User:
            return { ...state, curentSelectedUser: action.user }
        case UserActionType.Get_Users:
            return { ...state, loading: true, error: null }
        case UserActionType.Get_Users_Success:
            return { ...state, loading: false, error: null, users: action.users }
        case UserActionType.Get_Users_Failure:
            return { ...state, loading: true, error: action.error }
        case UserActionType.Get_View_User:
            return { ...state, currentViewUserLoading: true, error: null }
        case UserActionType.Get_View_User_Success:
            return { ...state, currentViewUserLoading: true, error: null,currentViewUser: action.user}
        case UserActionType.Get_View_User_Failure:
            return { ...state, currentViewUserLoading: true, error: action.error}

        default:
            return state;
    }
}