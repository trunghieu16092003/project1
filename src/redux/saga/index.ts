// src/sagas/index.ts
import { fork } from "redux-saga/effects";
import { todoSaga } from "./todoSaga";

function* rootSaga() {
  yield fork(todoSaga);
}

export default rootSaga;
