import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import {thunk} from 'redux-thunk'
import { addTodoReducer } from './reducers/add-todo-reducer';

export const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) 
    : compose; 

const enhancer = composeEnhancers(applyMiddleware());

export const rootReducer = addTodoReducer;

export const store = createStore(rootReducer, enhancer);