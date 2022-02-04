const loadedData = localStorage.getItem("arrGen");
let data = [];

function ud() {
  localStorage.setItem("arrGen", JSON.stringify(data));
}

if (loadedData != null) {
  data = JSON.parse(loadedData);
  for (var i = 0, l = data.length; i < l; i++) {
    document.getElementById("arrays").innerHTML += "<div class='array' onclick='loadArr(" + i + ", this)'>" + data[i].name + "</div><br>";
  }
} else {
  ud();
}

document.getElementById("addArr").onclick = function() {
  const arrName = prompt("Mi legyen a tömb neve?");
  if(arrName == "") {
    alert("Kérem írjon be valamit!");
    document.getElementById("addArr").click;
  } else {
    data.push({name: String(arrName), dat: "",});
    ud();
    alert("Tömb létrehozva!");
    window.location.href = "index.html";
  }
}

function loadArr(arr, doc) {
  document.getElementById("arrName").innerText = data[arr].name;
  document.getElementById("tools").style.display = "table";
  
  document.getElementById("rename").onclick = function() {
    document.getElementById("arrName").innerHTML = "<input type='text' value=" + data[arr].name + " id='rnmd'>";

  document.getElementById("rnmd").onchange = function() {
    data[arr].name = this.value;
    ud();
    document.getElementById("arrName").innerHTML = data[arr].name;
    doc.innerText = data[arr].name;
  }
}
  
  document.getElementById("x-inTools").onclick = function() {
    document.getElementById("tools").style.display = "none";
  }
  
  document.getElementById("del").onclick = function() {
    data.splice(arr, 1);
    ud();
    alert("Tömb törölve!");
    window.location.href = "index.html";
  }
  
  document.getElementById("addKey").onclick = function() {
    document.getElementById("tools").innerHTML = "<input type='text' id='keys' value=" + data[arr].dat + ">";
    document.getElementById("keys").onchange = function() {
      data[arr].dat = this.value.split(",");
      ud();
      alert("Kulcsok elmentve!");
      window.location.href = "index.html";
    }
  }
}
