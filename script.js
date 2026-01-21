function showData() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  document.getElementById("output").innerHTML =
    "Name: " + name + "<br>Email: " + email;
}

function readMore() {
  document.getElementById("moreText").style.display = "inline";
}

var selectedRow;

function addStudent() {
  var table = document.getElementById("studentTable");
  var row = table.insertRow();

  row.insertCell(0).innerHTML = sname.value;
  row.insertCell(1).innerHTML = sage.value;
  row.insertCell(2).innerHTML = sclass.value;
  row.insertCell(3).innerHTML =
    "<button onclick='editStudent(this)'>Edit</button> " +
    "<button onclick='deleteStudent(this)'>Delete</button>";

  sname.value = "";
  sage.value = "";
  sclass.value = "";
}

function deleteStudent(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function editStudent(btn) {
  selectedRow = btn.parentNode.parentNode;
  ename.value = selectedRow.cells[0].innerHTML;
  eage.value = selectedRow.cells[1].innerHTML;
  eclass.value = selectedRow.cells[2].innerHTML;

  document.getElementById("editForm").style.display = "block";
}

function updateStudent() {
  selectedRow.cells[0].innerHTML = ename.value;
  selectedRow.cells[1].innerHTML = eage.value;
  selectedRow.cells[2].innerHTML = eclass.value;

  document.getElementById("editForm").style.display = "none";
}