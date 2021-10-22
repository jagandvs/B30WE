fetch("https://613476997859e700176a38af.mockapi.io/api/v1/user")
  .then((response) => response.json())
  .then((data) => {
    var container = document.getElementById("container");
    var table = document.createElement("table");
    table.setAttribute("width", "100%");
    container.appendChild(table);
    console.log(data);

    let filterData2 = data.filter((value) => value.age < 18);
    filterData2.map((value) => {
      var tr1 = document.createElement("tr");
      table.appendChild(tr1);

      var td1 = document.createElement("td");
      td1.innerHTML = value.name;
      tr1.appendChild(td1);

      var td2 = document.createElement("td");
      td2.innerHTML = value.email_id;
      tr1.appendChild(td2);

      var td3 = document.createElement("td");
      td3.innerHTML = value.mobile_number;
      tr1.appendChild(td3);

      var td4 = document.createElement("td");
      td4.innerHTML = value.age;
      tr1.appendChild(td4);
    });
  });
