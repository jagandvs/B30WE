// document.getElementById("demo").innerHTML = "Hello world";

// element.innerHTML = html content
// element.attribute = value;
// element.style.property = new style
// element.setAttribute(attribute,value)

// document.createElement("h1");
// document.removeChild(element)
// document.appendChild(element);
// document.write("")
// let x = document.querySelectorAll("p.intro");
// console.log(x);

// document.getElementById("demo").innerHTML = x[0].innerHTML;

function myfunction() {
  let x = document.forms["panapplication"]["username"].value;
  let latname = document.forms["panapplication"]["latname"].value;

  if (x == "") {
    alert("username is required");
    return false;
  }
  if (lastname == "") {
  }
}

document.getElementById("ex1").style.color = "red";
document.getElementById("ex1").style.fontSize = "larger";
document.getElementById("ex1").style.backgroundColor = "green";

document.getElementById("myBtn").onclick = displayDate;

function displayDate() {
  setTimeout(function () {
    document.getElementById("todaydate").innerHTML = Date();
  }, 3000);
}

const paragraph = document.createElement("p");
const node = document.createTextNode("Welcme to guvi");

paragraph.appendChild(node);
// <p>Welcome to guvi</p>

const element = document.getElementById("ex2");
element.appendChild(paragraph);

document.getElementById("ex1").remove();

const col = document.getElementsByTagName("p");
document.getElementById("demo").innerHTML = "somethiong";
