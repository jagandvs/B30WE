var container = document.getElementById("container");

var form = document.createElement("form");
form.setAttribute("name", "myform");
form.setAttribute("onsubmit", "return validateForm()");
form.setAttribute("method", "post");

var table = document.createElement("table");
table.setAttribute("width", "100%");
form.appendChild(table);

var tr1 = document.createElement("tr");
table.appendChild(tr1);

var td1 = document.createElement("td");
td1.innerHTML = "<input type='text' id='lname' name='lname' /><br>Last";
tr1.appendChild(td1);

container.appendChild(form);
// var firstnamelable = document.createElement("label");
// firstnamelable.innerText = "Firstname";

// var nameTextBox = document.createElement("input");

// container.appendChild(firstnamelable);
