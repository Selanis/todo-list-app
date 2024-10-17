import { ADD_TODO_ACTION, REMOVE_TODO_ACTION, CHECK_TASK_ACTION } from "../constants";
import uuid from 'react-native-uuid';
import { AppDispatch } from "../types";

export type TTaskType = {
    name: string;
    status: boolean;
    key: string | number[];
}

export type TAddTodo = {
    readonly type: typeof ADD_TODO_ACTION;
    readonly task: TTaskType;
}

export type TRemoveTodoAction = {
    readonly type: typeof REMOVE_TODO_ACTION;
    readonly todoList: Array<TTaskType>;
}

export type TCheckTaskAction = {
    readonly type: typeof CHECK_TASK_ACTION;
    readonly key: string | number[];
}

export type TAddTodoAction = TAddTodo | 
    TRemoveTodoAction |
    TCheckTaskAction;

export const addTodoAction = (task: TTaskType): TAddTodoAction => ({
    type: ADD_TODO_ACTION,
    task: task
})

export const removeTodoAction = (key: string | number[], todo: Array<TTaskType>): TAddTodoAction => ({
    type: REMOVE_TODO_ACTION,
    todoList: todo.filter(item => item.key !== key)
})

export const checkTaskAction = (key: string | number[]): TCheckTaskAction => ({
    type: CHECK_TASK_ACTION,
    key: key
})

export function addTodo(text: string){
    return function(dispatch: AppDispatch) {
        const key = uuid.v4();

        dispatch(addTodoAction({
            name: text,
            status: false,
            key: key
        }))
    }
}