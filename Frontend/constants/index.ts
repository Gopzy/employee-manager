// Form constants

const FormFields = [
  { id: 1, title: "First Name", fieldName: "first_name", type: "input" },
  { id: 2, title: "Last Name", fieldName: "last_name", type: "input" },
  { id: 3, title: "Email", fieldName: "email", type: "input" },
  { id: 4, title: "Number", fieldName: "number", type: "input" },
  { id: 5, title: "Gender", fieldName: "gender", type: "select" },
];

const initialFormData = {
  first_name: "",
  last_name: "",
  email: "",
  number: null,
  gender: "M",
  _id: null,
  // id: 4,
  photo: "https://randomuser.me/api/portraits/men/75.jpg",
};

export { FormFields, initialFormData };
