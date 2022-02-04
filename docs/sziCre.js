const loadedData = localStorage.getItem("arrGen");
let data = [];

function ud() {
  localStorage.setItem("arrGen", JSON.stringify(data));
}

let forUseD = {
  weather: [],
  character: [],
  action: [],
  location: [],
  time: [],
  thing: [],
}

if (loadedData != null) {
  data = JSON.parse(loadedData);
  for (var i = 0, l = data.length; i < l; i++) {
    if (data[i].name.includes("sin-{weather}")) {
      forUseD.weather.push(data[i].dat);
    } else if (data[i].name.includes("sin-{character}")) {
      forUseD.character.push(data[i].dat);
    } else if (data[i].name.includes("sin-{action}")) {
      forUseD.action.push(data[i].dat);
    } else if (data[i].name.includes("sin-{location}")) {
      forUseD.location.push(data[i].dat);
    } else if (data[i].name.includes("sin-{time}")) {
      forUseD.time.push(data[i].dat);
    } else if (data[i].name.includes("sin-{thing}")) {
      forUseD.thing.push(data[i].dat);
    }
  }
} else {
  ud();
}

let toPrint = "";
function create() {
  toPrint = "";
  if(document.getElementById("weather").checked) {
    const key = Math.floor(Math.random() * forUseD.weather[0].length);
    toPrint += "Időjárás: " + forUseD.weather[0][key] + ", ";
  } 
  
  if(document.getElementById("thing").checked) {
    const key = Math.floor(Math.random() * forUseD.thing[0].length);
    toPrint += "Tárgy: " + forUseD.thing[0][key] + ", ";
  }
  if(document.getElementById("time").checked) {
    const key = Math.floor(Math.random() * forUseD.time[0].length);
    toPrint += "Idő: " + forUseD.time[0][key] + ", ";
  } 
  if(document.getElementById("location").checked) {
    const key = Math.floor(Math.random() * forUseD.location[0].length);
    toPrint += "Hely: " + forUseD.location[0][key] + ", ";
  }
  if(document.getElementById("character").checked) {
    const key = Math.floor(Math.random() * forUseD.character[0].length);
    toPrint += "Karakter: " + forUseD.character[0][key] + ", ";
  } 
  if(document.getElementById("action").checked) {
    const key = Math.floor(Math.random() * forUseD.action[0].length);
    toPrint += "Cselekmény: " + forUseD.action[0][key];
  }
  
  document.getElementById("result").innerText = toPrint;
}
