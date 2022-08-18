import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import { userReducer } from "./userReducer";

export const rootReducer=combineReducers({
    user:userReducer,
    post:postReducer,
});

export type RootState=ReturnType<typeof rootReducer>