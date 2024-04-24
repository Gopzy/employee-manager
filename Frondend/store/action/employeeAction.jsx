import {
  ADD_EMPLOYEES,
  DELETE_EMPLOYEES,
  GET_EMPLOYEES,
  SET_GRID_VIEW,
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

const setGridView = (payload) => ({
  type: SET_GRID_VIEW,
  payload,
});
export {
  getEmployees,
  deleteEmployees,
  addEmployees,
  updateEmployees,
  setGridView,
};
