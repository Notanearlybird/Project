//time
let now = new Date();
let day0 = now.getDay();
console.log(day0);
let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday"];
console.log(week);
let day = week[now.getDay()];
console.log(day);
let hours = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
if (hours < 10) {
  hours = `0${hours}`;
}
let timeX = `${hours}:${minutes}`;
console.log(timeX);

let newDate = document.querySelector("#oneDay");
newDate.innerHTML = `${day}, ${timeX}`;
// F to C
function fahrenheit(event) {
  event.preventDefault();
  let changeTemp = document.querySelector("#temp20");
  let tempo = changeTemp.innerHTML;
  tempo = Number(tempo);
  changeTemp.innerHTML = Math.round(tempo * 9) / 5 + 32;
}
console.log(fahrenheit);
let CtoF = document.querySelector("#tempC");
CtoF.addEventListener("click", fahrenheit);
//
function celsius(event) {
  event.preventDefault();
  let changeTemp2 = document.querySelector("#temp20");
  let tempoF = changeTemp2.innerHTML;
  tempoF = Number(tempoF);
  changeTemp2.innerHTML = (Math.round(tempoF - 32) * 5) / 9;
}
console.log(celsius);
let FtoC = document.querySelector("#tempF");
FtoC.addEventListener("click", celsius);
//city
//geolocation
function displayWeather(response) {
  console.log(response.data.name);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp20").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.main.wind
  );
  document.querySelector("#precipitation").innerHTML = response.data.main;
  document.querySelector("#weatherDescription").innerHTML =
    response.data.weather[0].main;
}

function search(city) {
  let ApiKey = "d416967554f86a78aa9c4db5cf091c8c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayWeather);
}
search("Paris");
function startSearch(event) {
  debugger;
  event.preventDefault();
  let city = document.querySelector("#searchCity").value;
  search(city);
}
console.log(startSearch);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", startSearch);

let SearchButton = document.querySelector("#button");
SearchButton.addEventListener("click", startSearch);

function searchLocation(position) {
  let ApiKey = "d416967554f86a78aa9c4db5cf091c8c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${ApiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}
console.log(searchLocation);

function getLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let locationButton = document.querySelector("#buttonHere");
locationButton.addEventListener("click", getLocation);
