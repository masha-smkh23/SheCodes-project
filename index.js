function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return `${day}, ${hours}:${minutes}`;
}

function updateWeatherData(response) {
  if (response.data.temperature) {
    let temperatureElement = document.querySelector("#temperature-value");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector("#icon");
    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = response.data.temperature.humidity;
    windElement.innerHTML = response.data.wind.speed;
    temperatureElement.innerHTML = Math.round(temperature);
    timeElement.innerHTML = `<strong>${formatDate(date)}</strong>`;
    iconElement.innerHTML = `<img class="weather-icon" src="${response.data.condition.icon_url}"/>`;
    console.log(response.data);
  } else {
    alert("Temperature data not found");
  }
}

function searchCity(city) {
  let apiKey = "4e3fb40e09d54863ac6o4t0243f8a502";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(updateWeatherData);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Lyon");
