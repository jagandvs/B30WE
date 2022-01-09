// Local Storage
function storeData() {
  localStorage.setItem("user", "jagan");
  console.log(localStorage.getItem("user"));

  sessionStorage.setItem("user", "jagan");
  console.log(sessionStorage.getItem("user"));
}
// Session Storage
