import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import employeesReducer from "./reducer/employeeReducer";
import { watchGetEmployee } from "./saga/employees.saga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    employees: employeesReducer,
  },
  middleware: (gDM) => gDM().concat(sagaMiddleware),
});

sagaMiddleware.run(watchGetEmployee);
