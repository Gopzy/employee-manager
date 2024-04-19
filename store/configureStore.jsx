import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import employeesReducer from "./reducer/employeeReducer";
import { watchGetEmployee } from "./saga/getEmployees.saga";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    employees: employeesReducer,
    // cart: cartReducer.reducer,
  },
  middleware: (gDM) => gDM().concat(sagaMiddleware),
});

sagaMiddleware.run(watchGetEmployee);
