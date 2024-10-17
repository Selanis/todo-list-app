import { TAddTodoAction, TTaskType } from "../actions/add-todo-action"
import { ADD_TODO_ACTION, CHECK_TASK_ACTION, REMOVE_TODO_ACTION } from "../constants"

interface IAddTodoInitial {
    todo: Array<TTaskType>
}

const initialState: IAddTodoInitial = {
    todo: []
}

export const addTodoReducer = (state=initialState, action: TAddTodoAction) => {
    switch (action.type) {
        case ADD_TODO_ACTION: {
            return {
                ...state,
                todo: [...state.todo, action.task],
            }
        }

        case REMOVE_TODO_ACTION: {
            return {
                ...state,
                todo: action.todoList
            }
        }

        case CHECK_TASK_ACTION: {
            return {
                ...state,
                todo: state.todo.map(item => item.key === action.key ? {...item, status: !item.status} : item)
            }
        }
    }
}