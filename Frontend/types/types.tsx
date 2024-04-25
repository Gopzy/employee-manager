export interface Reducers {
  employees: EmployeeReducerType;
}

export type EmployeeReducerType = {
  employeeData: [employeeDataType];
  gridView: boolean;
};

export type employeeDataType = {
  first_name: string;
  last_name: string;
  email: string;
  number: number;
  gender: string | "M" | "F";
  id?: string;
  _id?: string;
  photo?: string;
};

export type formDataType = {
  fieldName: string;
  title: string;
  type: any;
};

export type TSaga = {
  type: string;
  payload?: any;
  success?: Function;
  failed?: Function;
};

export type initialReducerType = {
  employeeData: [employeeDataType] | [];
  employeeData_error: boolean | null;
  gridView: boolean;
};

export type reducerPayloadType = {
  payload: employeeDataType | boolean;
};
