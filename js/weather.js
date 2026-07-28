// Edit to define your local language. Available: "en", "pt". Default is English.
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

// Open-Meteo does not require an API key

// Mapping of WMO weather codes to icon keys and descriptions
const wmoMap = {
    0: { day: "clear-day", night: "clear-night", desc: { en: "Clear sky", pt: "Céu limpo" } },
    1: { day: "partly-cloudy-day", night: "partly-cloudy-night", desc: { en: "Mainly clear", pt: "Predominantemente limpo" } },
    2: { day: "partly-cloudy-day", night: "partly-cloudy-night", desc: { en: "Partly cloudy", pt: "Parcialmente nublado" } },
    3: { day: "cloudy", night: "cloudy", desc: { en: "Overcast", pt: "Encoberto" } },
    45: { day: "fog", night: "fog", desc: { en: "Fog", pt: "Neblina" } },
    48: { day: "fog", night: "fog", desc: { en: "Rime fog", pt: "Neblina com geada" } },
    51: { day: "rain", night: "rain", desc: { en: "Light drizzle", pt: "Garoa fraca" } },
    53: { day: "rain", night: "rain", desc: { en: "Moderate drizzle", pt: "Garoa moderada" } },
    55: { day: "rain", night: "rain", desc: { en: "Dense drizzle", pt: "Garoa forte" } },
    61: { day: "rain", night: "rain", desc: { en: "Slight rain", pt: "Chuva fraca" } },
    63: { day: "rain", night: "rain", desc: { en: "Moderate rain", pt: "Chuva moderada" } },
    65: { day: "rain", night: "rain", desc: { en: "Heavy rain", pt: "Chuva forte" } },
    71: { day: "snow", night: "snow", desc: { en: "Slight snow", pt: "Neve fraca" } },
    73: { day: "snow", night: "snow", desc: { en: "Moderate snow", pt: "Neve moderada" } },
    75: { day: "snow", night: "snow", desc: { en: "Heavy snow", pt: "Neve forte" } },
    80: { day: "rain", night: "rain", desc: { en: "Rain showers", pt: "Pancadas de chuva" } },
    81: { day: "rain", night: "rain", desc: { en: "Moderate rain showers", pt: "Pancadas de chuva moderadas" } },
    82: { day: "rain", night: "rain", desc: { en: "Violent rain showers", pt: "Pancadas de chuva fortes" } },
    85: { day: "snow", night: "snow", desc: { en: "Snow showers", pt: "Pancadas de neve" } },
    86: { day: "snow", night: "snow", desc: { en: "Heavy snow showers", pt: "Pancadas de neve fortes" } },
    95: { day: "wind", night: "wind", desc: { en: "Thunderstorm", pt: "Tempestade" } },
    96: { day: "wind", night: "wind", desc: { en: "Thunderstorm with hail", pt: "Tempestade com granizo" } },
    99: { day: "wind", night: "wind", desc: { en: "Thunderstorm with heavy hail", pt: "Tempestade com granizo forte" } }
};

// Mapping of icon keys to local icon filenames
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
    let api = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;
    console.log(api);

    fetch(api)
        .then(function (response) {
            let data = response.json();
            return data;
        })
        .then(function (data) {
            let celsius = Math.floor(data.current_weather.temperature);
            weather.temperature.value = (tempUnit == 'C') ? celsius : Math.floor((celsius * 9/5) + 32);

            let code = data.current_weather.weathercode;
            let isDay = data.current_weather.is_day == 1;
            let entry = wmoMap[code] || wmoMap[0];

            weather.description = entry.desc[youLang] || entry.desc.en;
            let iconKey = isDay ? entry.day : entry.night;
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