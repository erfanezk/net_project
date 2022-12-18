const form = document.getElementById("comment-form");
const inputs = form.getElementsByTagName("input");
const error = document.getElementById("comment-form-error");
function ValidateEmail(input) {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    return true;
  } else {

    return false;
  }
}
const validate = () => {
  for (let i = 0; i < inputs.length; i++) {
    const element = inputs[i];
    if (element.name === "email" && !ValidateEmail(element)) {
      error.textContent = "email is invalid";
      return false;
    }
    if (element.value === "") {
      error.textContent = "fill all inputs";
      return false;
    }
  }
  error.textContent = "";
  return true;
};
const submitForm = (e) => {
  e.preventDefault();

  if (validate()) {
    alert("form submited");
  }
};
form.addEventListener("submit", submitForm);
