const input_email = document.querySelector(".inp-email");
const input_password = document.querySelector(".inp-password");
const login_form = document.querySelector("#login-form");

function login(event) {
  event.preventDefault();

  let email = input_email.value;
  let password = input_password.value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      alert("Login successfully");
      window.location.href = "../index.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.message);
    });
}

login_form.addEventListener("submit", login);