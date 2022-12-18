const form = document.getElementById("search-form");
const inputs = form.getElementsByTagName("input");
const error = document.getElementById("search-form-error")
const validate = () => {
  for (let i = 0; i < inputs.length; i++) {
    const element = inputs[i];
    if (element.value !== "") {
      error.textContent=""
      return true;
    }
  
  }
  error.textContent="at least fill one input!"
  return false;
};
const submitForm = (e) => {
  e.preventDefault();
  console.log("enter form");
  if (validate()) {
    console.log("form is valid");
  }
};
form.addEventListener("submit", submitForm);
