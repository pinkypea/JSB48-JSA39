const input_username = document.querySelector(".inp-username");
const input_email = document.querySelector(".inp-email");
const input_password = document.querySelector(".inp-password");
const input_confirm_password = document.querySelector(".inp-cf-password");
const form = document.querySelector("#register-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Lấy ra thông tin trên các ô input
  let username = input_username.value;
  let email = input_email.value;
  let password = input_password.value;
  let confirm_password = input_confirm_password.value;

  if (password != confirm_password) {
    alert("Password is not match");
  }

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .then(() => {
        alert("Sign up successfully!!!");
        window.location.href = "../index.html"
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.message);
    });
});
