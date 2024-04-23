function FormValidation(formData, setErrors, setIsFormValid) {
  const { first_name, last_name, email, number, gender } = formData;

  let errors = {};

  if (!first_name) {
    errors.first_name = "First name is required.";
  } else if (!/^[a-zA-Z]{6,10}$/.test(first_name)) {
    errors.first_name = "First name invalid.";
  }
  if (!last_name) {
    errors.last_name = "Last name is required.";
  } else if (!/^[a-zA-Z]{6,10}$/.test(last_name)) {
    errors.last_name = "Last name invalid.";
  }
  if (!number) {
    errors.number = "Phone number is required.";

    /* 
    following regex condition will validate Srilanka numbers starting with 
     +94,0 and without countrycode or 0
     eg: +94766673589, 0766673589, 766673589
   */
  } else if (!/^7|0|(?:\+94)[0-9]{9,10}$/.test(number)) {
    errors.number = "Phone number invalid.";
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

export default FormValidation;
