function fatchTable() {
  const x = new XMLHttpRequest();
  x.open("GET", "data.xml", true);
  x.onload = function () {
    if (x.status === 200) {
      let xml = x.responseXML;
      showTable(xml);
    } else {
      document.getElementById("myDiv").textContent = "Error Loading File!";
    }
  };
  x.onerror = function () {
    document.getElementById("myDiv").textContent = "Network Error!";
  };
  x.send();
}

function showTable(xml) {
  let users = xml.getElementsByTagName("user");
  let table = "<table><tr><th>Name</th><th>Age</th><th>City</th></tr>";

  for (let i = 0; i < users.length; i++) {
    let name = users[i].getElementsByTagName("name")[0].textContent;
    let age = users[i].getElementsByTagName("age")[0].textContent;
    let city = users[i].getElementsByTagName("city")[0].textContent;
    table += `<tr><td>${name}</td><td>${age}</td><td>${city}</td></tr>`;
  }
  table += "</table>";
  document.getElementById("myDiv").innerHTML = table;
}
