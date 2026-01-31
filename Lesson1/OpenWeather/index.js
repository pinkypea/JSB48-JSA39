const apiKey = "5045391bc8391c9f1251809a086e89e3";
const weatherResult = document.getElementById("weather-result");

document.getElementById("get-weather-btn").addEventListener("click", () => {
    const city = document.getElementById("city-input").value;
    if (city) {
        getWeatherByCity(city);
    } else {
        alert("Please enter a city name!");
    }
});

document.getElementById("get-location-btn").addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            getWeatherByLocation(latitude, longitude);
        }, (error) => {
            alert("Unable to retrieve your location.");
        });
    } else {
        alert("Geolocation is not supported by your browser.");
    }
});

function getWeatherByCity(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(() => alert("Error fetching weather data!"));
}

function getWeatherByLocation(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(() => alert("Error fetching weather data!"));
}

function displayWeather(data) {
    if (data.cod === 200) {
        weatherResult.innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } else {
        weatherResult.innerHTML = `<p>${data.message}</p>`;
    }
}