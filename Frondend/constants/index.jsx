// Form constants

const FormFields = [
  { title: "First Name", fieldName: "first_name", type: "input" },
  { title: "Last Name", fieldName: "last_name", type: "input" },
  { title: "Email", fieldName: "email", type: "input" },
  { title: "Number", fieldName: "number", type: "input" },
  { title: "Gender", fieldName: "gender", type: "select" },
];

const FormObj = {
  first_name: "",
  last_name: "",
  email: "",
  number: "",
  gender: "M",
  _id: null,
  // id: 4,
  photo: "https://randomuser.me/api/portraits/men/75.jpg",
};

export { FormFields, FormObj };
