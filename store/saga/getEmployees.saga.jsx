import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_EMPLOYEES,
  GET_EMPLOYEES_FAILED,
  GET_EMPLOYEES_SUCCESS,
} from "../action/actionType";

const EMPLOYEES_API = "http://localhost:8080/api/employees";

export function* getEmployeesSaga({ success, failed }) {
  try {
    const { data } = yield call(axios.get, EMPLOYEES_API);

    success?.();
    yield put({ type: GET_EMPLOYEES_SUCCESS, payload: data });
  } catch (error) {
    failed?.();
    yield put({ type: GET_EMPLOYEES_FAILED, payload: error });
  }
}

export function* watchGetEmployee() {
  yield takeLatest(GET_EMPLOYEES, getEmployeesSaga);
}
