import { PostDTO } from "../../types/DTOs/PostDTOs/PostDTO";
import { PostViewDTO } from "../../types/DTOs/PostDTOs/PostViewDTO";
import { UpdatePostDTO } from "../../types/DTOs/PostDTOs/UpdatePostDTO";
import { PostAction, PostActionType } from "../actions/postAction";

interface PostState {
    posts: PostDTO[],
    currentViewPost: PostViewDTO | null,
    currentUpdatePost: PostDTO | null,
    error: string | null,
    loading: boolean,
    currentViewPostLoading: boolean,
}
const postInitialState: PostState = {
    posts: [],
    currentViewPost: null,
    currentUpdatePost: null,
    error: null,
    loading: false,
    currentViewPostLoading: false,
}

export const postReducer = (state = postInitialState, action: PostAction): PostState => {
    switch (action.type) {
        case PostActionType.Set_Current_Update_Post:
            return { ...state, currentUpdatePost: action.post }
        case PostActionType.Get_Posts:
            return { ...state, loading: true, error: null }
        case PostActionType.Get_Posts_Success:
            return { ...state, loading: false, error: null, posts: action.posts }
        case PostActionType.Get_Posts_Failure:
            return { ...state, loading: true, error: action.error }
        case PostActionType.Get_View_Post:
            return { ...state, currentViewPostLoading: true, error: null }
        case PostActionType.Get_View_Post_Success:
            return { ...state, currentViewPostLoading: true, error: null, currentViewPost: action.post }
        case PostActionType.Get_View_Post_Failure:
            return { ...state, currentViewPostLoading: true, error: action.error }

        default:
            return state;
    }
}