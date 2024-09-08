function updateDateTime() {
  let now = new Date();
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = daysOfWeek[now.getDay()];
  let currentHours = now.getHours();
  if (currentHours < 10) {
    currentHours = `0${currentHours}`;
  }
  let currentMinutes = now.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  let todayParagraph = document.querySelector(".Today");
  todayParagraph.innerHTML = `<strong>${currentDay}</strong>, ${currentHours}:${currentMinutes}<br>`;
}

updateDateTime();

function displayTemperature(response) {
  // Check if response.data.temperature is available
  if (response.data.temperature && response.data.temperature.current) {
    let currentTemperature = Math.round(response.data.temperature.current);
    let todayParagraph = document.querySelector(".Today");
    // Clear any previous temperature data
    todayParagraph.innerHTML =
      todayParagraph.innerHTML.split("<br>")[0] + "<br>";
    todayParagraph.innerHTML += `<strong>Temperature:</strong> ⛅ ${currentTemperature}°C`;
  } else {
    console.error("Temperature data not found");
  }
}

function changeCity() {
  let searchButton = document.querySelector("input[value='Search 🔎']");
<<<<<<< Updated upstream
  let inputCity = document.getElementById("input-cityName"); 

  function fetchWeather() {
    let cityName = inputCity.value.trim(); 
=======
  let inputCity = document.getElementById("input-cityName");

  function fetchWeather() {
    let cityName = inputCity.value.trim();
    // Check if cityName is empty
    if (cityName === "") {
      alert("Please, enter the city"); // Displays the pop-up
      return; // Stops further execution if no city is entered
    }
>>>>>>> Stashed changes
    document.querySelector("h2").innerHTML = cityName.toUpperCase() + " 🏬";
    let apiKey = "4e3fb40e09d54863ac6o4t0243f8a502";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }

<<<<<<< Updated upstream
   // Add event listener for clicking the search button
   searchButton.addEventListener("click", function (event) {
=======
  // Add event listener for clicking the search button
  searchButton.addEventListener("click", function (event) {
>>>>>>> Stashed changes
    event.preventDefault();
    fetchWeather();
  });

  // Add event listener for pressing the Enter key
  inputCity.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      fetchWeather();
    }
  });
}

changeCity();

/* axios library to use in ajax to fetch (retrieve data) */
/* AJAX is used for API data fetch */
