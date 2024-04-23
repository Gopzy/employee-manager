import {
  GET_EMPLOYEES,
  GET_EMPLOYEES_FAILED,
  GET_EMPLOYEES_SUCCESS,
  SET_GRID_VIEW,
} from "../action/actionType";

const initialState = {
  employeeData: [],
  employeeData_error: null,
  gridView: true,
};

const employeesReducer = (state = initialState, action) => {
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

    case SET_GRID_VIEW:
      return {
        ...state,
        gridView: action.payload,
      };
    default:
      return state;
  }
};

export default employeesReducer;
