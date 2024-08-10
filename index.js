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
    todayParagraph.innerHTML += `<strong>Temperature:</strong> ${currentTemperature}°C`;
  } else {
    console.error("Temperature data not found");
  }
}

function changeCity() {
  let searchButton = document.querySelector("input[value='Search 🔎']");

  searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    let cityName = document.getElementById("cityName").value.trim();

    document.querySelector("h2").innerHTML = cityName.toUpperCase() + " 🏬";

    let apiKey = "4e3fb40e09d54863ac6o4t0243f8a502";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;

    // Fetch and display the temperature for the entered city
    axios.get(apiUrl).then(displayTemperature);
  });
}

changeCity();

/* axios library to use in ajax to fetch (retrieve data) */
/* AJAX is used for API data fetch */
