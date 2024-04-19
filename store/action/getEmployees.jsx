import { GET_EMPLOYEES } from "./actionType";

const getEmployees = (success, failed) => ({
  type: GET_EMPLOYEES,
  success,
  failed,
});

export default getEmployees;
