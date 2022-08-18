import { AnyAction, applyMiddleware, createStore } from "redux";
import thunk, { ThunkDispatch } from "redux-thunk";
import { rootReducer, RootState } from "./reducers";

export const store=createStore(rootReducer,applyMiddleware<DispatchFunctionType, RootState>(thunk));
type DispatchFunctionType = ThunkDispatch<RootState, undefined, AnyAction>
export type AppDispatch = typeof store.dispatch