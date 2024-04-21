import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_EMPLOYEES,
  GET_EMPLOYEES_FAILED,
  GET_EMPLOYEES_SUCCESS,
  DELETE_EMPLOYEES,
  DELETE_EMPLOYEES_SUCCESS,
  DELETE_EMPLOYEES_FAILED,
  ADD_EMPLOYEES,
  ADD_EMPLOYEES_SUCCESS,
  ADD_EMPLOYEES_FAILED,
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

export function* addEmployeesSaga({ payload, success, failed }) {
  console.log("addEmployeesSaga triggered :::::", payload);
  try {
    yield call(axios.post, "http://localhost:8080/api/employees", payload);

    success?.();
    yield put({ type: ADD_EMPLOYEES_SUCCESS });
  } catch (error) {
    failed?.();
    yield put({ type: ADD_EMPLOYEES_FAILED, payload: error });
  }
}

export function* deleteEmployeesSaga({ payload, success, failed }) {
  try {
    yield call(axios.delete, `http://localhost:8080/api/employees/${payload}`);

    success?.();
    yield put({ type: DELETE_EMPLOYEES_SUCCESS });
  } catch (error) {
    failed?.();
    yield put({ type: DELETE_EMPLOYEES_FAILED, payload: error });
  }
}

export function* watchGetEmployee() {
  yield takeLatest(GET_EMPLOYEES, getEmployeesSaga);
  yield takeLatest(ADD_EMPLOYEES, addEmployeesSaga);
  yield takeLatest(DELETE_EMPLOYEES, deleteEmployeesSaga);
}
