// Edit to define your local language. Default is English.
var youLang = "en"

// Edit to define the icon color of weather. Available: Dark, Nord, OneDark and White. Default is White.
var iconColor = "White"

const iconElement = document.querySelector('.weather-icon');
const tempElement = document.querySelector('.temperature-value p');
const descElement = document.querySelector('.temperature-description p');

// App data
const weather = {};
weather.temperature = {
    unit: 'celsius',
};

// Change to 'F' for Fahrenheit
var tempUnit = 'C';

// Use your own key for the Pirate Weather API
const key = 'YOUR_PIRATE_WEATHER_API_KEY';

// Mapping of Pirate Weather icon names to local icon filenames
const iconMap = {
    "clear-day": "01d",
    "clear-night": "01n",
    "rain": "09d",
    "snow": "13d",
    "sleet": "13d",
    "wind": "50d",
    "fog": "50d",
    "cloudy": "03d",
    "partly-cloudy-day": "02d",
    "partly-cloudy-night": "02n"
};

// Set Position function
setPosition();

function setPosition(position) {
    let latitude = -12.914322; // Insert your latitude here
    let longitude = -38.331219; // Insert your longitude here

    getWeather(latitude, longitude);
}

// Get the Weather data
function getWeather(latitude, longitude) {
    let api = `https://api.pirateweather.net/forecast/${key}/${latitude},${longitude}?units=si&lang=${youLang}`;
    console.log(api);

    fetch(api)
        .then(function (response) {
            let data = response.json();
            return data;
        })
        .then(function (data) {
            let celsius = Math.floor(data.currently.temperature);
            weather.temperature.value = (tempUnit == 'C') ? celsius : Math.floor((celsius * 9/5) + 32);
            weather.description = data.currently.summary || 'No description available';
            
            let iconKey = data.currently.icon || 'clear-day';
            // Map to your local icon naming convention
            weather.iconId = iconMap[iconKey] || '01d';
        })
        .then(function () {
            displayWeather();
        });
}

// Display Weather info
function displayWeather() {
    iconElement.innerHTML = `<img alt="Weather Icon" src="icons/${iconColor}/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}° -`;
    descElement.innerHTML = weather.description;
}
