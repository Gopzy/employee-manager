function Validation(formData, setErrors, setIsFormValid) {
  const { first_name, last_name, email, number, gender } = formData;

  let errors = {};

  if (!first_name) {
    errors.first_name = "First name is required.";
  }
  if (!last_name) {
    errors.last_name = "Last name is required.";
  }
  if (!number) {
    errors.number = "Phone number is required.";
  }
  if (!gender) {
    errors.gender = "Gender is required.";
  }

  if (!email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Email is invalid.";
  }

  setErrors(errors);
  setIsFormValid(Object.keys(errors).length === 0);
}

export default Validation;
