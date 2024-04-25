import { TSaga } from "@/types/types";
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
  UPDATE_EMPLOYEES,
  UPDATE_EMPLOYEES_SUCCESS,
  UPDATE_EMPLOYEES_FAILED,
} from "../action/actionType";

const EMPLOYEES_API = "http://localhost:8080/api/employee";

export function* getEmployeesSaga({ success, failed }: TSaga) {
  try {
    const { data } = yield call(axios.get, EMPLOYEES_API);

    success?.();
    yield put({ type: GET_EMPLOYEES_SUCCESS, payload: data });
  } catch (error) {
    failed?.();
    yield put({ type: GET_EMPLOYEES_FAILED, payload: error });
  }
}

export function* addEmployeesSaga({ payload, success, failed }: TSaga) {
  try {
    yield call(axios.post, EMPLOYEES_API, payload);

    success?.();
    yield put({ type: ADD_EMPLOYEES_SUCCESS });
  } catch (error) {
    failed?.();
    yield put({ type: ADD_EMPLOYEES_FAILED, payload: error });
  }
}

export function* updateEmployeesSaga({
  payload: { id, requestParams },
  success,
  failed,
}: TSaga) {
  try {
    yield call(axios.put, `${EMPLOYEES_API}/${id}`, requestParams);

    success?.();
    yield put({ type: UPDATE_EMPLOYEES_SUCCESS });
  } catch (error) {
    failed?.();
    yield put({ type: UPDATE_EMPLOYEES_FAILED, payload: error });
  }
}

export function* deleteEmployeesSaga({ payload, success, failed }: TSaga) {
  try {
    yield call(axios.delete, `${EMPLOYEES_API}/${payload}`);

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
  yield takeLatest(UPDATE_EMPLOYEES, updateEmployeesSaga);
  yield takeLatest(DELETE_EMPLOYEES, deleteEmployeesSaga);
}
