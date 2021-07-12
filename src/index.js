import "./styles.css";

import "./styles.css";
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function FormValidation() {
  var box;
  var activeIndex = 0;
  var Fields = [
    {
      name: "email"
    },
    {
      name: "password"
    }
  ];
  this.init = function () {
    var form = document.createElement("form");
    form.style.cssText =
      "width: 400px;  margin: 40px auto; padding: 20px; border: 1px solid #ddd";
    form.addEventListener("submit", this.validateForm);
    var labelEmail = document.createElement("label");
    labelEmail.innerHTML = "Email*";
    //box.style.position = "relative";
    labelEmail.style.cssText = "";
    var inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "email");
    inputEmail.setAttribute("id", "f-email");
    // inputEmail.setAttribute("required", true);
    inputEmail.style.cssText =
      "width: 100%; min-height: 30px; padding: 4px; border: 1px solid #ddd; border-radius: 4px; margin-top: 4px;margin-bottom: 4px;";

    var errorEmail = document.createElement("div");
    errorEmail.setAttribute("id", "error-email");
    errorEmail.style.cssText = "width: 100%; margin-bottom: 20px; color: red";
    form.append(labelEmail);
    form.append(inputEmail);
    form.append(errorEmail);
    var labelPassword = document.createElement("label");
    labelPassword.innerHTML = "Password*";
    //box.style.position = "relative";
    labelPassword.style.cssText = "";
    var inputPassword = document.createElement("input");
    inputPassword.setAttribute("type", "password");
    inputPassword.setAttribute("id", "f-password");
    // inputPassword.setAttribute("required", true);
    inputPassword.style.cssText =
      "width: 100%; min-height: 30px; padding: 4px; border: 1px solid #ddd; border-radius: 4px; margin-top: 4px;margin-bottom: 4px;";
    var errorPassword = document.createElement("div");
    errorPassword.setAttribute("id", "error-password");
    errorPassword.style.cssText =
      "width: 100%; margin-bottom: 20px; color: red";
    form.append(labelPassword);
    form.append(inputPassword);
    form.append(errorPassword);
    var btn = this.getButton();
    form.append(btn);
    document.getElementById("app").appendChild(form);
  };

  this.getButton = function () {
    var btn1 = document.createElement("button");
    btn1.style.margin = "0 auto";
    btn1.innerHTML = "Submit";
    btn1.setAttribute("type", "submit");
    return btn1;
  };
  this.validateForm = function (event) {
    event.preventDefault();
    var isError = false;
    var emailInput = document.getElementById("f-email");
    var passwordInput = document.getElementById("f-password");
    var errorEmail = document.getElementById("error-email");
    var errorPassword = document.getElementById("error-password");
    console.log(emailInput.value);
    if (!emailInput.value) {
      isError = true;
      errorEmail.innerHTML = "Email is required!";
    } else if (!EMAIL_REGEX.test(emailInput.value)) {
      isError = true;
      errorEmail.innerHTML = "Enter a valid Email!";
    }
    if (!passwordInput.value) {
      isError = true;
      errorPassword.innerHTML = "Password is required!";
    }
    console.log(isError);
    return false;
  };
}

var form = new FormValidation();
form.init();
