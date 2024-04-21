import {
  ADD_EMPLOYEES,
  DELETE_EMPLOYEES,
  GET_EMPLOYEES,
  UPDATE_EMPLOYEES,
} from "./actionType";

const getEmployees = (success, failed) => ({
  type: GET_EMPLOYEES,
  success,
  failed,
});

const addEmployees = (payload, success, failed) => ({
  type: ADD_EMPLOYEES,
  payload,
  success,
  failed,
});

const updateEmployees = (payload, success, failed) => ({
  type: UPDATE_EMPLOYEES,
  payload,
  success,
  failed,
});

const deleteEmployees = (payload, success, failed) => ({
  type: DELETE_EMPLOYEES,
  payload,
  success,
  failed,
});

export { getEmployees, deleteEmployees, addEmployees, updateEmployees };
