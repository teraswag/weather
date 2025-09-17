let watch = 0;
let interval;
let sigminterval = false;
let temp = 0;
let city = "London";
var r = document.querySelector(":root");
const API_KEY = "7338eef037adfe35519799293738f165"; // i dont even pay for this lmao
async function getTemperature() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const temperature = data.main.temp;
    return temperature;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
}
lolzers = setInterval(async function () {
  temp = await getTemperature();
  document.querySelector(".wtext").innerHTML = temp;
}, 100);
function changeCity() {
  city = document.querySelector(".city").value;
  document.querySelector(".mini").innerHTML =
    "Weather shown in " + city + ". Change city/region in settings.";
  closePopup();
}
function closePopup() {
  document.querySelector(".popup2").className = "nodisp";
  document.querySelector(".hide").className = "settings";
}

function Popup() {
  document.querySelector(".nodisp").className = "popup2";
  document.querySelector(".settings").className = "hide";
}

function whiteTheme() {
  r.style.setProperty("--bg", "#fff");
  r.style.setProperty("--fg", "#000");
  r.style.setProperty("--wr", "#f00");
}
function blackTheme() {
  r.style.setProperty("--bg", "#000");
  r.style.setProperty("--fg", "#fff");
  r.style.setProperty("--wr", "#f00");
}
function blueTheme() {
  r.style.setProperty("--bg", "#023e8a");
  r.style.setProperty("--fg", "#fff");
  r.style.setProperty("--wr", "#f00");
}
function redTheme() {
  r.style.setProperty("--bg", "#8a0202");
  r.style.setProperty("--fg", "#fff");
  r.style.setProperty("--wr", "#fff");
}
function greenTheme() {
  r.style.setProperty("--bg", "#028a02");
  r.style.setProperty("--fg", "#fff");
  r.style.setProperty("--wr", "#f00");
}
function orangeTheme() {
  r.style.setProperty("--bg", "#ff5c00");
  r.style.setProperty("--fg", "#fff");
  r.style.setProperty("--wr", "#f00");
}
function yellowTheme() {
  r.style.setProperty("--bg", "#fff200");
  r.style.setProperty("--fg", "#000");
  r.style.setProperty("--wr", "#f00");
}
function purpleTheme() {
  r.style.setProperty("--bg", "#55028a");
  r.style.setProperty("--fg", "#fff");
  r.style.setProperty("--wr", "#f00");
}
function latoFont() {
  r.style.setProperty("--fnt", "'Lato', sans-serif");
}
function notoFont() {
  r.style.setProperty("--fnt", "'Noto Serif', serif");
}
function robFont() {
  r.style.setProperty("--fnt", "'Roboto Mono', monospace");
}
function ralFont() {
  r.style.setProperty("--fnt", "'Raleway', sans-serif");
}
function pacFont() {
  r.style.setProperty("--fnt", "'Pacifico', sans-serif");
}
function nabFont() {
  r.style.setProperty("--fnt", "'Nabla', sans-serif");
}
function pirFont() {
  r.style.setProperty("--fnt", "'Pirata One', sans-serif");
}
function aluFont() {
  r.style.setProperty("--fnt", "'Alumni Sans Pinstripe', sans-serif");
}
