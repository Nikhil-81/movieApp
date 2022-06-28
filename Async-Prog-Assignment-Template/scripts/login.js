let form = document.querySelector("form");
form.addEventListener("submit", ValidateUser);
let data = JSON.parse(localStorage.getItem("userCred"));
function ValidateUser() {
  event.preventDefault();
  let usercarad = data.email;
  let userpass = data.password;
  let valUser = form.UserMail.value;
  let valpass = form.UserPass.value;
  console.log(usercarad, valUser, userpass, valpass);
  if (usercarad == valUser && userpass == valpass) {
    window.location.href = "index.html";
  } else {
    alert("invalid Credentials’");
  }
}
