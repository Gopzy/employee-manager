import React, { MouseEventHandler } from "react";
import { Field, ErrorMessage, FormikTouched, FormikErrors } from "formik";
import { formDataType } from "@/types/types";

const FormItem = ({
  data,
  onChange,
  errors,
  touched,
}: {
  data: formDataType;
  onChange: (string) => void;
  errors: {};
  touched: {};
}) => {
  const { fieldName, title, type } = data;
  const selectType = type === "select";

  return (
    <div className=" flex flex-row flex-wrap justify-between mb-4">
      <label>{title}</label>
      <div className={`flex flex-col ml-7 ${selectType ? "w-[66%]" : ""}`}>
        <Field
          onChange={onChange}
          name={fieldName}
          type="text"
          as={type}
          className={`${
            errors[fieldName] && touched[fieldName]
              ? "border border-red-500"
              : "border-gray-300 border-b-2"
          }   px-4 py-2 focus:outline-none bg-slate-200  text-gray-700 `}
        >
          {selectType ? (
            <>
              <option value="M">Male</option>
              <option value="F">Female</option>
            </>
          ) : null}
        </Field>

        <div className=" flex flex-wrap">
          <ErrorMessage
            name={fieldName}
            component="div"
            className="error flex flex-wrap text-red-700 "
          />
        </div>
      </div>
    </div>
  );
};

export default FormItem;
