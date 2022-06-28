let form = document.querySelector("form");
form.addEventListener("submit", storform_data);
function storform_data() {
  event.preventDefault();
  let n = form.name.value;
  let p = form.phone.value;
  let e = form.email.value;
  let pass = form.pass.value;

  function objCreat(n, p, e, pass) {
    this.name = n;
    this.phone = p;
    this.email = e;
    this.password = pass;
  }

  let userData = new objCreat(n, p, e, pass);
  localStorage.setItem("userCred", JSON.stringify(userData));
  window.location.href = "login.html";
}
