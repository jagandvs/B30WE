function onFormSubmit() {
  let formData = {};
  formData["name"] = document.getElementById("name").value;
  formData["email_id"] = document.getElementById("email").value;
  formData["mobile_number"] = document.getElementById("mobile").value;
  formData["age"] = document.getElementById("age").value;

  fetch("https://613476997859e700176a38af.mockapi.io/api/v1/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}

const getData = async () => {
  const response = await fetch(
    "https://613476997859e700176a38af.mockapi.io/api/v1/user"
  );
  const data = await response.json();
  loadData(data);
};

const loadData = (data) => {
  var table = document.getElementById("loadData");

  data.map((value, index) => {
    let row = document.createElement("tr");
    let row_index = document.createElement("td");
    row_index.innerHTML = index + 1;
    let row_name = document.createElement("td");
    row_name.innerHTML = value.name;

    let row_email = document.createElement("td");
    row_email.innerHTML = value.email_id;

    let row_mobile = document.createElement("td");
    row_mobile.innerHTML = value.mobile_number;

    let row_age = document.createElement("td");
    row_age.innerHTML = value.age;

    let row_action = document.createElement("td");
    row_action.innerHTML = `<button class='btn btn-danger' onclick='deleteRecord(${value.id})'>Delete</button>`;

    row.appendChild(row_index);
    row.appendChild(row_name);
    row.appendChild(row_email);
    row.appendChild(row_mobile);
    row.appendChild(row_age);
    row.appendChild(row_action);

    table.appendChild(row);
  });
};

getData();

function deleteRecord(id) {
  fetch("https://613476997859e700176a38af.mockapi.io/api/v1/user/" + id, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => window.location.reload());
}
