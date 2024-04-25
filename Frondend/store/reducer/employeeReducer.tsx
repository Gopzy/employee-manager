import { employeeDataType, initialReducerType } from "@/types/types";
import {
  GET_EMPLOYEES,
  GET_EMPLOYEES_FAILED,
  GET_EMPLOYEES_SUCCESS,
  SET_GRID_VIEW,
} from "../action/actionType";

const initialState: initialReducerType = {
  employeeData: [],
  employeeData_error: null,
  gridView: true,
};

const employeesReducer = (
  state = initialState,
  { type, payload }: { type: string; payload: employeeDataType | boolean }
) => {
  switch (type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employeeData: [],
      };
    case GET_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employeeData: payload,
      };
    case GET_EMPLOYEES_FAILED:
      return {
        ...state,
        employeeData_error: payload,
      };

    case SET_GRID_VIEW:
      return {
        ...state,
        gridView: payload,
      };
    default:
      return state;
  }
};

export default employeesReducer;
