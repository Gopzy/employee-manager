import { employeeDataType } from "@/types/types";
import {
  ADD_EMPLOYEES,
  DELETE_EMPLOYEES,
  GET_EMPLOYEES,
  SET_GRID_VIEW,
  UPDATE_EMPLOYEES,
} from "./actionType";

const getEmployees = (success?: () => void, failed?: () => void) => ({
  type: GET_EMPLOYEES,
  success,
  failed,
});

const addEmployees = (
  payload: employeeDataType,
  success?: () => void,
  failed?: () => void
) => ({
  type: ADD_EMPLOYEES,
  payload,
  success,
  failed,
});

const updateEmployees = (
  payload: any,
  success?: () => void,
  failed?: () => void
) => ({
  type: UPDATE_EMPLOYEES,
  payload,
  success,
  failed,
});

const deleteEmployees = (
  payload: string,
  success?: () => void,
  failed?: () => void
) => ({
  type: DELETE_EMPLOYEES,
  payload,
  success,
  failed,
});

const setGridView = (payload: boolean) => ({
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
