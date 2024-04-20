import {
  GET_EMPLOYEES,
  GET_EMPLOYEES_FAILED,
  GET_EMPLOYEES_SUCCESS,
} from "../action/actionType";

const initialState = {
  employeeData: [],
  employeeData_error: null,
};

const employeesReducer = (state = initialState, action) => {
  // console.log("employeesReducer ::::", action.payload);
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employeeData: [],
      };
    case GET_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employeeData: action.payload,
      };
    case GET_EMPLOYEES_FAILED:
      return {
        ...state,
        employeeData_error: action.payload,
      };
    default:
      return state;
  }
};

export default employeesReducer;
