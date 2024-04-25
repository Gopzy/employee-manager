import * as Yup from "yup";

const phoneRegex = /^(?:\+?94|0)?(?:7\d{8})$/;
const alphabetsRegex = /^[aA-zZ\s]+$/;

export const schema = Yup.object().shape({
  first_name: Yup.string()
    .required("First name is required")
    .matches(alphabetsRegex, "Only alphabets are allowed")
    .min(6, "enter min 6 charactors")
    .max(10, "maximum 10 charactors only"),
  last_name: Yup.string()
    .required("First name is required")
    .matches(alphabetsRegex, "Only alphabets are allowed")
    .min(6, "enter min 6 charactors")
    .max(10, "maximum 10 charactors only"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  number: Yup.string()
    .matches(phoneRegex, "Invalid phone number")
    .required("Phone number is required"),
  gender: Yup.string().required("Gender is required"),
});
