import { DELETE_EMPLOYEES, GET_EMPLOYEES } from "./actionType";

const getEmployees = (success, failed) => ({
  type: GET_EMPLOYEES,
  success,
  failed,
});

const deleteEmployees = (payload, success, failed) => ({
  type: DELETE_EMPLOYEES,
  payload,
  success,
  failed,
});

export { getEmployees, deleteEmployees };
