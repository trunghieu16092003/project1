// src/actions/todoActions.ts

import { Todo } from "../reducer/todoReducer";
import {
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
} from "./constants";

export const addTodoRequest = (data: any) => ({
  type: ADD_TODO_REQUEST,
  payload: data,
});

export const addTodoSuccess = (todo: Todo) => ({
  type: ADD_TODO_SUCCESS,
  payload: todo,
});

export const updateTodoRequest = (todo: Todo) => ({
  type: UPDATE_TODO_REQUEST,
  payload: todo,
});

export const updateTodoSuccess = (todo: Todo) => ({
  type: UPDATE_TODO_SUCCESS,
  payload: todo,
});

export const deleteTodoRequest = (id: string) => ({
  type: "DELETE_TODO_REQUEST",
  payload: id,
});

export const deleteTodoSuccess = (id: string) => ({
  type: DELETE_TODO_SUCCESS,
  payload: id,
});
