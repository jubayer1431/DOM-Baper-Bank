const inputEmail = document.getElementById("login-email");
const inputPassword = document.getElementById("login-password");
const btnSubmit = document.getElementById("login-submit");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  if (inputEmail.value === "a@a.a" && inputPassword.value === "1234") {
    window.location.href = "dashboard.html";
  }
});
