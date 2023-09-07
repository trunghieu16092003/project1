// src/reducers/index.ts

import { combineReducers } from "redux";
import todoReducer, { TodoState } from "./todoReducer";

export interface RootState {
  todoReducer: TodoState;
}

const rootReducer = combineReducers({
  todoReducer,
});

export default rootReducer;
