import { call, put, takeLatest } from "redux-saga/effects";
import {
  createTodoListsApi,
  updateTodoListsApi,
  deleteTodoListsApi,
} from "../../service/todoList";

function* addTodoSaga(action: any) {
  try {
    const newTodo: string = yield call(createTodoListsApi, action.payload);
    yield put({ type: "ADD_TODO_SUCCESS", payload: newTodo });
  } catch (error) {}
}

function* updateTodoSaga(action: any) {
  try {
    const { name, id } = action.payload;
    const updatedTodo: string = yield call(updateTodoListsApi, { name }, id);
    console.log(updatedTodo);
    yield put({ type: "UPDATE_TODO_SUCCESS", payload: updatedTodo });
  } catch (error) {}
}
function* deleteTodoSaga(action: any) {
  try {
    // Truy cập payload một cách đúng cách
    const id = action.payload;

    // Gọi API để xóa todo
    yield call(deleteTodoListsApi, id);

    // Gửi action DELETE_TODO_SUCCESS khi xóa thành công
    yield put({ type: "DELETE_TODO_SUCCESS", payload: id });
  } catch (error) {
    // Xử lý lỗi nếu cần
    yield put({ type: "DELETE_TODO_FAILURE", payload: error });
  }
}

export function* todoSaga() {
  yield takeLatest("ADD_TODO_REQUEST", addTodoSaga);
  yield takeLatest("UPDATE_TODO_REQUEST", updateTodoSaga);
  yield takeLatest("DELETE_TODO_REQUEST", deleteTodoSaga);
}
