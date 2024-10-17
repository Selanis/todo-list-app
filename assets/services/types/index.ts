import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { store } from "../root-reducer";
import { TAddTodoAction } from "../actions/add-todo-action";


export type TApplicationActions = TAddTodoAction;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, TApplicationActions>;
export type AppThunkAction<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TApplicationActions>;