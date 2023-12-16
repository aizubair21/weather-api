// console.log("dom Loaded");
// run a function when document fully loded
document.addEventListener("DOMContentLoaded", () => {
    // getWeatherIfLocalStorageDataFound();
});

// const getLocApiKey = 'eldObUl5V0Q4MWpiaXFQeEpNSEVVSTIBU1R5ZIU50E50RmRra1dxRg==';
// const apiKey = '2acfc6c74c2396283f1bf3b656fc902f';
const searchInputElement = document.getElementById('searchInput');
// const locationElement = document.getElementById('setLocation');
const temperatureElement = document.getElementById('temperature');
const setLocationBtn = document.getElementById('setLocation');
const locationSubBtn = document.getElementById("locationSubBtn");
const locationForm = document.getElementById('user_location');
const locationCheckBtn = document.getElementById('locationCheckBtn')
const spinner = `<div class="d-flex justify-content-center">
<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div>`;
// const setLocationBtn = document.getElementById('setLocation')


// const tempMinMaxElement = document.getElementById('TempMinMax');
// const skyConditionElement = document.getElementById("skyCondition");
const windMitterElement = document.getElementById("windMitter");
const sunRiseElement = document.getElementById('sunRise')
const sunSetElement = document.getElementById("sunSet");
const nextHourWeatherElement = document.getElementById('nextHourWeather');
const footerElement = document.getElementById("footer");
const sunOrMon = document.getElementById('sun');
let localDataLength = JSON.parse(localStorage.getItem('search'));

const todate = new Date();
let nextSixDayName = [];
let otherDayWeatherList = '';
let indexCount = [];
let tempArray = [];
let searchArray = [];
let getSearchWeatherArray = [];
// const descriptionElement = document.getElementById('description');

const todayElement = document.getElementById("toDay");
const currentTimeElement = document.getElementById('currentTime');
// const locationDropdownElement = document.getElementById('locationDropdown');
// const searchForm = document.getElementById('searchForm');
// let currentUserLat, currentUserLong;

let weakNames = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
// const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

setInterval(() => {}, 1000);

function animation() {

    let date = new Date();
    todayElement.innerHTML = date.toDateString();
    todayElement.style.fontSize = 12 + "px";
    currentTimeElement.innerHTML = date.toLocaleTimeString();
    requestAnimationFrame(animation)
}
animation();


// searchForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let getSearchValue = e.target.searchInput.value;
//     if (getSearchValue != "") {
//         getWeather(getSearchValue);
//     }

//     // console.log(e.target.locationInput.value);
// })

// Event listener for the search button
// searchButton.addEventListener('click', () => {
//     const location = searchInput.value;
//     if (location) {
//         fetchWeatherData(location);
//     }
// });

// Function to fetch weather data from the API
// function fetchWeatherData(location) {
//     const apiUrl = "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2acfc6c74c2396283f1bf3b656fc902f";

//     fetch(apiUrl)
//         .then((response) => response.json())
//         .then((data) => {
//             locationElement.textContent = `Location: ${data.name}, ${data.sys.country}`;
//             temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
//             descriptionElement.textContent = `Description: ${data.weather[0].description}`;
//             const iconCode = data.weather[0].icon;
//             weatherIconElement.src = `https://openweathermap.org/img/w/${iconCode}.png`;
//         })
//         .catch((error) => {
//             console.error('Error fetching weather data:', error);
//             locationElement.textContent = 'Location not found';
//         });
// }
// fetchWeatherData

const weatherObj = {
    "coord": {
        "lon": 89.1221,
        "lat": 23.9011
    },
    "weather": [{
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04d"
    }],
    "base": "stations",
    "main": {
        "temp": 305.06,
        "feels_like": 312.06,
        "temp_min": 305.06,
        "temp_max": 305.06,
        "pressure": 1003,
        "humidity": 68,
        "sea_level": 1003,
        "grnd_level": 1001
    },
    "visibility": 10000,
    "wind": {
        "speed": 2.06,
        "deg": 197,
        "gust": 2.25
    },
    "clouds": {
        "all": 83
    },
    "dt": 1695718708,
    "sys": {
        "country": "BD",
        "sunrise": 1695685995,
        "sunset": 1695729413
    },
    "timezone": 21600,
    "id": 1185191,
    "name": "Kushtia",
    "cod": 200
};

const forceCat = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [{
            "dt": 1695988800,
            "main": {
                "temp": 305.57,
                "feels_like": 310.9,
                "temp_min": 304.44,
                "temp_max": 305.57,
                "pressure": 1001,
                "sea_level": 1001,
                "grnd_level": 1000,
                "humidity": 59,
                "temp_kf": 1.13
            },
            "weather": [{
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
            }],
            "clouds": {
                "all": 83
            },
            "wind": {
                "speed": 1.87,
                "deg": 203,
                "gust": 2.43
            },
            "visibility": 10000,
            "pop": 0.41,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-29 12:00:00"
        },
        {
            "dt": 1695999600,
            "main": {
                "temp": 303.68,
                "feels_like": 309.79,
                "temp_min": 302.45,
                "temp_max": 303.68,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 1003,
                "humidity": 71,
                "temp_kf": 1.23
            },
            "weather": [{
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
            }],
            "clouds": {
                "all": 91
            },
            "wind": {
                "speed": 3.23,
                "deg": 153,
                "gust": 5.26
            },
            "visibility": 10000,
            "pop": 0.55,
            "rain": {
                "3h": 0.86
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-29 15:00:00"
        },
        {
            "dt": 1696010400,
            "main": {
                "temp": 301.07,
                "feels_like": 305.66,
                "temp_min": 301.07,
                "temp_max": 301.07,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 1003,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [{
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
            }],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 3.33,
                "deg": 168,
                "gust": 6.06
            },
            "visibility": 10000,
            "pop": 0.99,
            "rain": {
                "3h": 0.48
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-29 18:00:00"
        },
        {
            "dt": 1696021200,
            "main": {
                "temp": 300.41,
                "feels_like": 304.16,
                "temp_min": 300.41,
                "temp_max": 300.41,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 1002,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [{
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
            }],
            "clouds": {
                "all": 98
            },
            "wind": {
                "speed": 3.25,
                "deg": 163,
                "gust": 6.12
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 1.52
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-29 21:00:00"
        },
        {
            "dt": 1696032000,
            "main": {
                "temp": 299.13,
                "feels_like": 299.13,
                "temp_min": 299.13,
                "temp_max": 299.13,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 1003,
                "humidity": 90,
                "temp_kf": 0
            },
            "weather": [{
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            }],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 3.82,
                "deg": 166,
                "gust": 6.01
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 1.35
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-30 00:00:00"
        },
        {
            "dt": 1696042800,
            "main": {
                "temp": 300.98,
                "feels_like": 304.83,
                "temp_min": 300.98,
                "temp_max": 300.98,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1005,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [{
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            }],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.93,
                "deg": 179,
                "gust": 3.52
            },
            "visibility": 10000,
            "pop": 0.98,
            "rain": {
                "3h": 1.43
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-30 03:00:00"
        },
        {
            "dt": 1696053600,
            "main": {
                "temp": 304.39,
                "feels_like": 310.18,
                "temp_min": 304.39,
                "temp_max": 304.39,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 1003,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [{
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            }],
            "clouds": {
                "all": 98
            },
            "wind": {
                "speed": 3.01,
                "deg": 158,
                "gust": 3.59
            },
            "visibility": 9571,
            "pop": 0.98,
            "rain": {
                "3h": 2.23
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-30 06:00:00"
        },
        {
            "dt": 1696064400,
            "main": {
                "temp": 304.67,
                "feels_like": 309.98,
                "temp_min": 304.67,
                "temp_max": 304.67,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 1001,
                "humidity": 63,
                "temp_kf": 0
            },
            "weather": [{
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            }],
            "clouds": {
                "all": 95
            },
            "wind": {
                "speed": 3.55,
                "deg": 183,
                "gust": 3.7
            },
            "visibility": 10000,
            "pop": 0.54,
            "rain": {
                "3h": 2.46
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-09-30 09:00:00"
        },
        {
            "dt": 1696075200,
            "main": {
                "temp": 301.96,
                "feels_like": 306.19,
                "temp_min": 301.96,
                "temp_max": 301.96,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 1001,
                "humidity": 74,
                "temp_kf": 0
            },
            "weather": [{
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
            }],
            "clouds": {
                "all": 75
            },
            "wind": {
                "speed": 3.2,
                "deg": 179,
                "gust": 4.83
            },
            "visibility": 10000,
            "pop": 0.59,
            "rain": {
                "3h": 0.17
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-30 12:00:00"
        },
        {
            "dt": 1696086000,
            "main": {
                "temp": 300.74,
                "feels_like": 304.25,
                "temp_min": 300.74,
                "temp_max": 300.74,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 1003,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [{
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
            }],
            "clouds": {
                "all": 69
            },
            "wind": {
                "speed": 3.05,
                "deg": 175,
                "gust": 5.85
            },
            "visibility": 10000,
            "pop": 0.38,
            "rain": {
                "3h": 0.17
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-30 15:00:00"
        },
        {
            "dt": 1696096800,
            "main": {
                "temp": 300.22,
                "feels_like": 303.55,
                "temp_min": 300.22,
                "temp_max": 300.22,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 1002,
                "humidity": 85,
                "temp_kf": 0
            },
            "weather": [{
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
            }],
            "clouds": {
                "all": 82
            },
            "wind": {
                "speed": 2.59,
                "deg": 124,
                "gust": 5.2
            },
            "visibility": 10000,
            "pop": 0.39,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-30 18:00:00"
        },
        {
            "dt": 1696107600,
            "main": {
                "temp": 299.49,
                "feels_like": 299.49,
                "temp_min": 299.49,
                "temp_max": 299.49,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 1001,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [{
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
            }],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 3.1,
                "deg": 116,
                "gust": 6.95
            },
            "visibility": 10000,
            "pop": 0.73,
            "rain": {
                "3h": 1.79
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-09-30 21:00:00"
        },
        {
            "dt": 1696118400,
            "main": {
                "temp": 298.96,
                "feels_like": 299.92,
                "temp_min": 298.96,
                "temp_max": 298.96,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 1002,
                "humidity": 89,
                "temp_kf": 0
            },
            "weather": [{
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }],
            "clouds": {
                "all": 96
            },
            "wind": {
                "speed": 3.52,
                "deg": 106,
                "gust": 7.44
            },
            "visibility": 10000,
            "pop": 0.65,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-10-01 00:00:00"
        },
        {
            "dt": 1696129200,
            "main": {
                "temp": 303.24,
                "feels_like": 307.69,
                "temp_min": 303.24,
                "temp_max": 303.24,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 1003,
                "humidity": 67,
                "temp_kf": 0
            },
            "weather": [{
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }],
            "clouds": {
                "all": 31
            },
            "wind": {
                "speed": 3.95,
                "deg": 118,
                "gust": 5.08
            },
            "visibility": 10000,
            "pop": 0.13,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-10-01 03:00:00"
        },
        {
            "dt": 1696140000,
            "main": {
                "temp": 306.25,
                "feels_like": 311.52,
                "temp_min": 306.25,
                "temp_max": 306.25,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 1001,
                "humidity": 56,
                "temp_kf": 0
            },
            "weather": [{
                "id": 802,
                "main": "Clouds",
                "description": "scattered clouds",
                "icon": "03d"
            }],
            "clouds": {
                "all": 26
            },
            "wind": {
                "speed": 3.26,
                "deg": 140,
                "gust": 3.31
            },
            "visibility": 10000,
            "pop": 0.44,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-10-01 06:00:00"
        },
        {
            "dt": 1696150800,
            "main": {
                "temp": 305.37,
                "feels_like": 311.06,
                "temp_min": 305.37,
                "temp_max": 305.37,
                "pressure": 1000,
                "sea_level": 1000,
                "grnd_level": 998,
                "humidity": 61,
                "temp_kf": 0
            },
            "weather": [{
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10d"
            }],
            "clouds": {
                "all": 71
            },
            "wind": {
                "speed": 2.58,
                "deg": 157,
                "gust": 2.59
            },
            "visibility": 10000,
            "pop": 0.88,
            "rain": {
                "3h": 1.17
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-10-01 09:00:00"
        },
        {
            "dt": 1696161600,
            "main": {
                "temp": 302.46,
                "feels_like": 307.85,
                "temp_min": 302.46,
                "temp_max": 302.46,
                "pressure": 1001,
                "sea_level": 1001,
                "grnd_level": 1000,
                "humidity": 76,
                "temp_kf": 0
            },
            "weather": [{
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
            }],
            "clouds": {
                "all": 86
            },
            "wind": {
                "speed": 2.33,
                "deg": 160,
                "gust": 3.07
            },
            "visibility": 10000,
            "pop": 0.96,
            "rain": {
                "3h": 1.98
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-10-01 12:00:00"
        },
        {
            "dt": 1696172400,
            "main": {
                "temp": 300.38,
                "feels_like": 303.63,
                "temp_min": 300.38,
                "temp_max": 300.38,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 1002,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [{
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10n"
            }],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.06,
                "deg": 138,
                "gust": 9.94
            },
            "visibility": 10000,
            "pop": 0.86,
            "rain": {
                "3h": 3.7
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-10-01 15:00:00"
        },
        {
            "dt": 1696183200,
            "main": {
                "temp": 299.31,
                "feels_like": 299.31,
                "temp_min": 299.31,
                "temp_max": 299.31,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 1002,
                "humidity": 89,
                "temp_kf": 0
            },
            "weather": [{
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04n"
            }],
            "clouds": {
                "all": 91
            },
            "wind": {
                "speed": 4.03,
                "deg": 133,
                "gust": 11.24
            },
            "visibility": 10000,
            "pop": 0.74,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-10-01 18:00:00"
        },
        {
            "dt": 1696194000,
            "main": {
                "temp": 298.62,
                "feels_like": 299.55,
                "temp_min": 298.62,
                "temp_max": 298.62,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 1000,
                "humidity": 89,
                "temp_kf": 0
            },
            "weather": [{
                "id": 803,
                "main": "Clouds",
                "description": "broken clouds",
                "icon": "04n"
            }],
            "clouds": {
                "all": 80
            },
            "wind": {
                "speed": 3.52,
                "deg": 95,
                "gust": 9.78
            },
            "visibility": 10000,
            "pop": 0.01,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-10-01 21:00:00"
        },
        {
            "dt": 1696204800,
            "main": {
                "temp": 298.28,
                "feels_like": 299.12,
                "temp_min": 298.28,
                "temp_max": 298.28,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 1001,
                "humidity": 87,
                "temp_kf": 0
            },
            "weather": [{
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }],
            "clouds": {
                "all": 90
            },
            "wind": {
                "speed": 5.7,
                "deg": 79,
                "gust": 13.97
            },
            "visibility": 10000,
            "pop": 0.07,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-10-02 00:00:00"
        },
        {
            "dt": 1696215600,
            "main": {
                "temp": 299.83,
                "feels_like": 302.27,
                "temp_min": 299.83,
                "temp_max": 299.83,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 1003,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [{
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 6.49,
                "deg": 79,
                "gust": 12.47
            },
            "visibility": 10000,
            "pop": 0.51,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-10-02 03:00:00"
        },
        {
            "dt": 1696226400,
            "main": {
                "temp": 298.26,
                "feels_like": 299.18,
                "temp_min": 298.26,
                "temp_max": 298.26,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 1000,
                "humidity": 90,
                "temp_kf": 0
            },
            "weather": [{
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
            }],
            "clouds": {
                "all": 96
            },
            "wind": {
                "speed": 10.54,
                "deg": 97,
                "gust": 19.33
            },
            "visibility": 4028,
            "pop": 0.97,
            "rain": {
                "3h": 4.63
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-10-02 06:00:00"
        },
        {
            "dt": 1696237200,
            "main": {
                "temp": 298.26,
                "feels_like": 299.12,
                "temp_min": 298.26,
                "temp_max": 298.26,
                "pressure": 1000,
                "sea_level": 1000,
                "grnd_level": 999,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [{
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
            }],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.89,
                "deg": 92,
                "gust": 17.1
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 3.72
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-10-02 09:00:00"
        },
        {
            "dt": 1696248000,
            "main": {
                "temp": 297.97,
                "feels_like": 298.83,
                "temp_min": 297.97,
                "temp_max": 297.97,
                "pressure": 1000,
                "sea_level": 1000,
                "grnd_level": 999,
                "humidity": 89,
                "temp_kf": 0
            },
            "weather": [{
                "id": 500,
                "main": "Rain",
                "description": "light rain",
                "icon": "10n"
            }],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 11.31,
                "deg": 102,
                "gust": 18.21
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 2.71
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-10-02 12:00:00"
        },
        {
            "dt": 1696258800,
            "main": {
                "temp": 297.32,
                "feels_like": 298.33,
                "temp_min": 297.32,
                "temp_max": 297.32,
                "pressure": 1000,
                "sea_level": 1000,
                "grnd_level": 998,
                "humidity": 97,
                "temp_kf": 0
            },
            "weather": [{
                "id": 502,
                "main": "Rain",
                "description": "heavy intensity rain",
                "icon": "10n"
            }],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 9.41,
                "deg": 113,
                "gust": 16.67
            },
            "visibility": 725,
            "pop": 1,
            "rain": {
                "3h": 45.49
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-10-02 15:00:00"
        },
        {
            "dt": 1696269600,
            "main": {
                "temp": 297.92,
                "feels_like": 299.01,
                "temp_min": 297.92,
                "temp_max": 297.92,
                "pressure": 1000,
                "sea_level": 1000,
                "grnd_level": 999,
                "humidity": 98,
                "temp_kf": 0
            },
            "weather": [{
                "id": 502,
                "main": "Rain",
                "description": "heavy intensity rain",
                "icon": "10n"
            }],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 7.36,
                "deg": 119,
                "gust": 13.13
            },
            "visibility": 1216,
            "pop": 1,
            "rain": {
                "3h": 35.79
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-10-02 18:00:00"
        },
        {
            "dt": 1696280400,
            "main": {
                "temp": 297.74,
                "feels_like": 298.79,
                "temp_min": 297.74,
                "temp_max": 297.74,
                "pressure": 999,
                "sea_level": 999,
                "grnd_level": 998,
                "humidity": 97,
                "temp_kf": 0
            },
            "weather": [{
                "id": 503,
                "main": "Rain",
                "description": "very heavy rain",
                "icon": "10n"
            }],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 8.24,
                "deg": 121,
                "gust": 13.65
            },
            "visibility": 3549,
            "pop": 1,
            "rain": {
                "3h": 63.99
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-10-02 21:00:00"
        },
        {
            "dt": 1696291200,
            "main": {
                "temp": 297.83,
                "feels_like": 298.86,
                "temp_min": 297.83,
                "temp_max": 297.83,
                "pressure": 1001,
                "sea_level": 1001,
                "grnd_level": 999,
                "humidity": 96,
                "temp_kf": 0
            },
            "weather": [{
                "id": 502,
                "main": "Rain",
                "description": "heavy intensity rain",
                "icon": "10d"
            }],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 8.21,
                "deg": 131,
                "gust": 13.81
            },
            "visibility": 6085,
            "pop": 1,
            "rain": {
                "3h": 26.37
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-10-03 00:00:00"
        },
        {
            "dt": 1696302000,
            "main": {
                "temp": 298.03,
                "feels_like": 299.03,
                "temp_min": 298.03,
                "temp_max": 298.03,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 1002,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [{
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
            }],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 7.07,
                "deg": 144,
                "gust": 12.6
            },
            "visibility": 10000,
            "pop": 0.96,
            "rain": {
                "3h": 4.95
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-10-03 03:00:00"
        },
        {
            "dt": 1696312800,
            "main": {
                "temp": 298.46,
                "feels_like": 299.5,
                "temp_min": 298.46,
                "temp_max": 298.46,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 1001,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [{
                "id": 502,
                "main": "Rain",
                "description": "heavy intensity rain",
                "icon": "10d"
            }],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.65,
                "deg": 176,
                "gust": 12.09
            },
            "visibility": 7568,
            "pop": 0.96,
            "rain": {
                "3h": 39.93
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-10-03 06:00:00"
        },
        {
            "dt": 1696323600,
            "main": {
                "temp": 298.61,
                "feels_like": 299.67,
                "temp_min": 298.61,
                "temp_max": 298.61,
                "pressure": 1002,
                "sea_level": 1002,
                "grnd_level": 1000,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [{
                "id": 502,
                "main": "Rain",
                "description": "heavy intensity rain",
                "icon": "10d"
            }],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 8.57,
                "deg": 173,
                "gust": 14.51
            },
            "visibility": 4337,
            "pop": 1,
            "rain": {
                "3h": 15.5
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-10-03 09:00:00"
        },
        {
            "dt": 1696334400,
            "main": {
                "temp": 299.1,
                "feels_like": 299.1,
                "temp_min": 299.1,
                "temp_max": 299.1,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 1002,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [{
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10n"
            }],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 8.28,
                "deg": 160,
                "gust": 15.31
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 5.96
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-10-03 12:00:00"
        },
        {
            "dt": 1696345200,
            "main": {
                "temp": 299.13,
                "feels_like": 299.13,
                "temp_min": 299.13,
                "temp_max": 299.13,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 1004,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [{
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10n"
            }],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 7.02,
                "deg": 154,
                "gust": 13.35
            },
            "visibility": 5803,
            "pop": 1,
            "rain": {
                "3h": 3.62
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-10-03 15:00:00"
        },
        {
            "dt": 1696356000,
            "main": {
                "temp": 299.12,
                "feels_like": 299.12,
                "temp_min": 299.12,
                "temp_max": 299.12,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 1004,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [{
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10n"
            }],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 6.4,
                "deg": 158,
                "gust": 13.05
            },
            "visibility": 7736,
            "pop": 1,
            "rain": {
                "3h": 4.54
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-10-03 18:00:00"
        },
        {
            "dt": 1696366800,
            "main": {
                "temp": 298.96,
                "feels_like": 300.02,
                "temp_min": 298.96,
                "temp_max": 298.96,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 1002,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [{
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10n"
            }],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 4.89,
                "deg": 162,
                "gust": 11
            },
            "visibility": 6799,
            "pop": 1,
            "rain": {
                "3h": 5.03
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2023-10-03 21:00:00"
        },
        {
            "dt": 1696377600,
            "main": {
                "temp": 298.6,
                "feels_like": 299.68,
                "temp_min": 298.6,
                "temp_max": 298.6,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 1003,
                "humidity": 95,
                "temp_kf": 0
            },
            "weather": [{
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
            }],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 4.01,
                "deg": 174,
                "gust": 8.68
            },
            "visibility": 5494,
            "pop": 1,
            "rain": {
                "3h": 3.18
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-10-04 00:00:00"
        },
        {
            "dt": 1696388400,
            "main": {
                "temp": 299.45,
                "feels_like": 299.45,
                "temp_min": 299.45,
                "temp_max": 299.45,
                "pressure": 1007,
                "sea_level": 1007,
                "grnd_level": 1005,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [{
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
            }],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 4.8,
                "deg": 160,
                "gust": 9.36
            },
            "visibility": 7136,
            "pop": 1,
            "rain": {
                "3h": 5.37
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-10-04 03:00:00"
        },
        {
            "dt": 1696399200,
            "main": {
                "temp": 301.51,
                "feels_like": 306.89,
                "temp_min": 301.51,
                "temp_max": 301.51,
                "pressure": 1005,
                "sea_level": 1005,
                "grnd_level": 1004,
                "humidity": 84,
                "temp_kf": 0
            },
            "weather": [{
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
            }],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.13,
                "deg": 166,
                "gust": 7.9
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 4.08
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-10-04 06:00:00"
        },
        {
            "dt": 1696410000,
            "main": {
                "temp": 301.08,
                "feels_like": 306.01,
                "temp_min": 301.08,
                "temp_max": 301.08,
                "pressure": 1003,
                "sea_level": 1003,
                "grnd_level": 1001,
                "humidity": 86,
                "temp_kf": 0
            },
            "weather": [{
                "id": 501,
                "main": "Rain",
                "description": "moderate rain",
                "icon": "10d"
            }],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.95,
                "deg": 163,
                "gust": 6.89
            },
            "visibility": 10000,
            "pop": 1,
            "rain": {
                "3h": 4.52
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2023-10-04 09:00:00"
        }
    ],
    "city": {
        "id": 1185241,
        "name": "Dhaka",
        "coord": {
            "lat": 23.7104,
            "lon": 90.4074
        },
        "country": "BD",
        "population": 10356500,
        "timezone": 21600,
        "sunrise": 1695944945,
        "sunset": 1695988119
    }
};

// });
async function getWeather(city) {

    document.getElementById('weatherTitle').innerHTML = spinner;
    document.getElementById("moreWeatherInfo").innerHTML = spinner;
    nextHourWeatherElement.innerHTML = spinner;
    footerElement.innerHTML = spinner;

    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city??"Dhaka"}&APPID=2acfc6c74c2396283f1bf3b656fc902f`)
        .then((response) => response.data)
        .then((weather) => {
            // console.log(weather.weather[0].main);
            // console.log(weather);
            setLocationBtn.innerHTML = weather.name;
            // searchInputElement.value = weather.name;
            let temperatureCelcious = weather.main.temp - 275.14;
            let localStorageObject = {
                keyword: weather.name,
                dateTime: todate,
                temp: temperatureCelcious,
                weather: weather.weather,
                active: false,
            };
            localStorageFunction(localStorageObject, weather);
            // setTimeout(() => {
            //     showLocalStorageSearchData();
            // }, 1000);
            temperatureElement.innerHTML =
                `
                <div id="mainImg"></div>
                ${temperatureCelcious.toFixed(1)}<sup >°C</sup>
                <div>
                    <div id="weatherTitle"></div>
                    <div> <span id="minTemp"></span> - <span id="maxTemp"></span><sup >°C</sup> </div>
                </div>
            
            `;
            // let tempMinCelcious = weather.main.temp_min - 275.14;
            let tempMaxCelcious = weather.main.temp_max - 275.14;
            document.getElementById('maxTemp').innerHTML = tempMaxCelcious.toFixed(1);
            // skyConditionElement.innerHTML = 
            // `
            // <div style="display:flex">

            //     <div style="text-align:center">
            //     <p class="p">${weather.weather[0].main}</p>
            //     <p class="p"> (${weather.clouds.all}% clear)</p>

            //     </div>

            // </div>
            // `;
            // let windSpeedMiles = weather.wind.speed * 3.6;
            //     windMitterElement.innerHTML =
            //         `
            // <span class="windMitter"> ${windSpeedMiles.toFixed(3)} Kh/H </span>
            // <div class="h6">
            //     <img width="25"  src="img/wind.png">
            // </div>
            // `;

            let sunRiseMillisecound = weather.sys.sunrise * 1000;
            let sunRiseLocalString = new Date(sunRiseMillisecound);
            let sunRise =
                `
            <img width="40" height="40" src="img/sunrise.png" alt="">
            <div class="title">${sunRiseLocalString.getHours()}:${sunRiseLocalString.getMinutes()} AM</div>
            `;
            sunRiseElement.innerHTML = sunRise;

            let sunSetMillisecound = weather.sys.sunset * 1000;
            let sunSetLocalString = new Date(sunSetMillisecound);
            let sunSet =
                `
            <img width="40" height="40" src="img/sunset.png" alt="">
            <div class="title"> ${sunSetLocalString.getHours() > 12 ? sunSetLocalString.getHours()-12 : sunSetLocalString.getHours() }:${sunSetLocalString.getMinutes()} PM</div>

            `;
            sunSetElement.innerHTML = sunSet;
            // console.log(weather);
            document.getElementById('weatherTitle').innerHTML = weather.weather[0].main;
            getWeatherNextFiveHours(city);
            rotateSunPostion(sunRiseLocalString, sunSetLocalString);

            /**
             * make other weather info
             */
            let mwinfo = `
            <div class="weatherItem">
                <div class="icon">
                    <img src="img/temperature.png" alt="">
                </div>
                <div class="temp">
                    27 <sup>c</sup>
                </div>
                <div class="title">
                    Feels Like
                </div>
        
            </div>
            <div class="weatherItem">
                <div class="icon">
                    <img src="img/humidity.png" alt="">
                </div>
                <div class="temp">
                    ${weather.main.humidity} %
                </div>
                <div class="title">
                    Humidity
                </div>
        
            </div>
            <div class="weatherItem">
                <div class="icon">
                    <img src="img/wind.png" alt="">
                </div>
                <div class="temp">
                    ${weather.main.pressure} hPa
                </div>
                <div class="title">
                    Air Pressure
                </div>
        
            </div>
            <div class="weatherItem">
                <div class="icon">
                    <img src="img/eye.png" alt="">
                </div>
                <div class="temp">
                    ${weather.visibility} meter
                </div>
                <div class="title">
                    Visibility
                </div>
        
            </div>
        
            <div class="weatherItem">
                <div class="icon">
                    <img src="img/sea.png" alt="">
                </div>
                <div class="temp">
                    ${weather.main.sea_level} hPa
                </div>
                <div class="title">
                    Sea Label
                </div>
        
            </div>
            <div class="weatherItem">
                <div class="icon">
                    <img src="img/preature.png">
                </div>
                <div class="temp">
                    ${weather.wind.speed} meter/sec
                </div>
                <div class="title">
                    Air Speed
                </div>
        
            </div>
            `;
            document.getElementById("moreWeatherInfo").innerHTML = mwinfo;

            /**
             * left side main image
             */
            switch (weather.weather[0].main) {
                case 'Clear':
                    document.getElementById('mainImg').innerHTML = `<img src="img/clear_sky.png">`;
                    // todayImg = img/clear_sky.png;
                    break;
                case 'Clouds':
                    document.getElementById('mainImg').innerHTML = `<img src="img/broken_cloud_sky.png">`;
                    // todayImg = img/broken_cloud_sky.png;
                    break;
                case "Rain":
                    document.getElementById('mainImg').innerHTML = `<img src="img/rain_sky.png">`;
                    break;

                default:
                    document.getElementById('mainImg').innerHTML = `<img src="img/cloud_sky.png">`;
                    break;
                    // break;
            }

        })
        .catch((error) => {
            console.log(error);
            alert("Location Not Fount! ")
        })
    // console.log(weatherObj.main);

    // locationElement.innerHTML = weatherObj.name.toUpperCase();
    // weatherIconElement.src = `https://openweathermap.org/img/w/${weatherObj.weather[0].icon}.png`;
}
// getWeather('Dhaka');

function test() {

    locationElement.innerHTML = weatherObj.name;
    searchInputElement.value = weatherObj.name;
    let temperatureCelcious = weatherObj.main.temp - 275.14;
    temperatureElement.innerHTML =
        `
        <div id="mainImg"></div>
        ${temperatureCelcious.toFixed(1)}<sup style="font-size:12px;">°C</sup>
        <div>
            <div id="weatherTitle"></div>
            <div> <span id="minTemp"></span> - <span id="maxTemp"></span><sup style="font-size:11px" >°C</sup> </div>
        </div>
    
    `;

    let sunRiseMillisecound = weatherObj.sys.sunrise * 1000;
    let sunRiseLocalString = new Date(sunRiseMillisecound);
    let sunRise =
        `
    <img width="40" height="40" src="img/sunrise.png" alt="">
    <div class="title">${sunRiseLocalString.getHours()}:${sunRiseLocalString.getMinutes()} AM</div>
    `;
    sunRiseElement.innerHTML = sunRise;

    let sunSetMillisecound = weatherObj.sys.sunset * 1000;
    let sunSetLocalString = new Date(sunSetMillisecound);
    let sunSet =
        `
    <img width="40" height="40" src="img/sunset.png" alt="">
    <div class="title"> ${sunSetLocalString.getHours() > 12 ? sunSetLocalString.getHours()-12 : sunSetLocalString.getHours() }:${sunSetLocalString.getMinutes()} PM</div>

    `;
    sunSetElement.innerHTML = sunSet;
    // console.log(sunRiseLocalString.getHours(), sunSetLocalString.getHours(), todate.getHours());
    rotateSunPostion();
}
// test();

async function rotateSunPostion(srt, sst) {
    // let date = new Date().getTime();
    let sr = srt.getHours() + "." + srt.getMinutes();
    let ss = sst.getHours() + "." + sst.getMinutes();
    let ct = todate.getHours() + "." + todate.getMinutes();
    let srp = -80;
    let ssp = 80;
    let getFloatPercentage = ((ct - sr) / (ss - sr)) * 100;
    let getIntPer = +getFloatPercentage.toFixed(1);

    let rotatePixel = 1;
    // if (getIntPer > 50) {
    //     rotatePixel+=0.8;
    //     sunOrMon.style.transform = `translateX(-50%) rotate(${rotatePixel}deg)`;
    // }else{
    //     rotatePixel-=0.8;
    //     sunOrMon.style.transform =  `translateX(-50%) rotate(${getIntPer}deg)`;
    // }

    // run a while loop till getIntPer

    for (let i = 1; i < getIntPer + 1; i++) {
        rotatePixel = srp += 1.5;
        if (rotatePixel > 80) {
            sunOrMon.style.display = "none";
        }
    }
    if (getIntPer == 0) {
        rotatePixel = -80;
    }

    sunOrMon.style.transform = `translateX(-50%) rotate(${rotatePixel}deg)`;
    // console.log(getIntPer, rotatePixel.toFixed());
}

// get current user location 
// function getCurrentUserLatLog(){

//     navigator.geolocation.getCurrentPosition((position)=>{
//         // console.log(position);
//         currentUserLat = position.coords.latitude.toFixed(2);
//         currentUserLong = position.coords.longitude.toFixed(2);
//         console.log(currentUserLat, currentUserLong);

//         getWeatherNextFiveDays();

//     })
//     // return [currentUserLat , currentUserLong];


// }
// getCurrentUserLatLog()


//get weather from openweathermap for next 5 days
async function getWeatherNextFiveHours(city) {
    // await getCurrentUserLatLog();
    // .then()

    nextHourWeatherElement.innerHTML = spinner;
    footerElement.innerHTML = spinner;

    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city??"dhaka"}&appid=2acfc6c74c2396283f1bf3b656fc902f`)
        .then((response) => response.data)
        .then((weather) => {
            let nextDayWeather = '';
            // let otherInfoWeather = '';
            weather.list.forEach((fw) => {
                console.log(fw.weather[0].main);
                let currentDate = new Date(); //today
                let dtt = fw.dt * 1000; //convert UTC to millicound
                let fwDate = new Date(dtt); //current date corespondint millicound
                let hours, minute;

                if (fwDate.getHours() > 12) {
                    hours = (fwDate.getHours() - 12).toString().padStart(2, ' ');
                } else {
                    hours = (fwDate.getHours()).toString().padStart(2, " ");
                }
                if (hours == 0) {
                    hours = 12;
                }

                let tempCelcious = fw.main.temp - 275.14;

                if (fwDate.getDate() == currentDate.getDate() || fwDate.getDate() == currentDate.getDate() + 1) {
                    // console.log(fw);
                    // let todayImg = '';
                    nextDayWeather +=
                        `
                    <div class="weatherItem">
                        <div class="temp">${ tempCelcious.toFixed(1) }<sup class="sup">°C</sup></div>
                        <div>
                            <img class="iconImg" src="https://openweathermap.org/img/w/${fw.weather[0].icon}.png" alt="">
                            <div class="time">${hours}:${fwDate.getMinutes()}${fwDate.getHours() > 11 ?' PM': ' AM'} </div>
                        </div>
                    </div> 
                
                `;
                    // document.getElementById('mainImg').innerHTML = `<img  src="https://openweathermap.org/img/w/${fw.weather[0].icon}.png">`;

                    //min max weather
                    let tempMinCelcious = fw.main.temp_min - 275.14;
                    let tempMaxCelcious = fw.main.temp_max - 275.14;
                    document.getElementById('minTemp').innerHTML = tempMinCelcious.toFixed(1);

                }
            });


            /**
             * weather other information 
             */

            // .setAttribute('src', "https://openweathermap.org/img/w/${fw.weather[0].icon}.png");
            nextHourWeatherElement.innerHTML = nextDayWeather;
            otherDayWeatherList = weather;
            setWeatherNextFourDays()

        })
        .catch((error) => {
            console.log(error);
        });

    // console.log(counteries.length);
    // cities.forEach((city)=>{
    //     if(city.country_id == 1 ){
    //         console.log(city);
    //     }
    // })
}

let currentDate = new Date(); //today
// let utcstring = currentDate.toUTCString();
// let unixTimestamps = Date.parse(utcstring);
// let utcTime = new Date(unixTimestapns);
// console.log(currentDate.getDate());

let footeri = '';
async function setWeatherNextFourDays() {
    //call nextDay funciton 
    getDay();

    // get next four days weather data
    makeNestWatherArray();
    // tempArray = [];
    // for (let index = currentDate.getDate();; index++) {
    //     indexCount.push(index);

    //     if (index > 31) {
    //         index = 1;
    //     }
    //     if (indexCount.length > 7) {
    //         break;
    //     }
    //     // console.log(index);
    //     nextWeatherInfo.list.forEach((fw) => {

    //         let dtt = fw.dt * 1000; //convert UTC to millisecound 
    //         let nttDate = new Date(dtt) // get current date from millisecound
    //         // console.log(nttDate.getDate());
    //         if (nttDate.getDate() == index) {
    //             // console.log(fw.dt_txt);
    //             tempArray[index]=fw;
    //         }

    //     })
    // };

    // console.log(tempArray);

    // set next four days weather data 

    footerElement.innerHTML = "";
    let ind = 0;
    tempArray.forEach((nw) => {
        // let tempCelcious = nw.main.temp_max - 275.14;
        let tempCelcious2 = nw.main.temp_min - 275.14;
        // let nwDates = nw.dtt * 100;
        // console.log("max:"+nw.main.temp_max, "min:"+nw.main.temp_min);
        // let nwDate = new Date(nwDates);
        // index -= 3
        footeri +=
            `
            <div class="footer-item">
            
                <div class="footer-temp">${tempCelcious2.toFixed(1)}  <sup style="font-size:12px">c</sup> </div>

                <div class="footer-img">
                    <img class="iconImg" src="https://openweathermap.org/img/w/${nw.weather[0].icon}.png">
                </div>

                <div class="footer-title">
                ${nextSixDayName[ind]?? "next"}
                </div>

            </div>
            `;
        // console.log("index of temp array " + ind);
        ind++;
    })
    footerElement.innerHTML = footeri;
    footeri = '';
    tempArray = [];
    indexCount = [];
    document.getElementsByClassName("time")[0].innerHTML = "Now";
    const footerTitle = document.getElementsByClassName('footer-title');
    footerTitle[0].innerHTML = "Today";
    footerTitle[1].innerHTML = "Tomorrow";
    // console.log(tempArray);
}

//get coresponding next few days
async function getDay() {

    // const today = `${todate.getMonth()+1}/${todate.getDate()} ${todate.getHours()}:${todate.getMinutes()}`;
    nextSixDayName = [];
    for (let d = todate.getDay();; d++) {
        if (d > 6) {
            d = 0;
        }
        if (nextSixDayName.length > 6) {
            break;
        }
        let weakDay = weakNames[d];
        nextSixDayName.push(weakDay);
        // console.log(nextSixDayName);
    };
    // nextSixDayName.splice(0,1,"Today");
    // nextSixDayName.splice(1,1,"Tomorrow");
}

// console.log("after splice " + nextSixDayName);
//get coresponding few days weather 
async function makeNestWatherArray() {
    // tempArray = [];
    for (let index = currentDate.getDate();; index++) {
        indexCount.push(index);

        if (index > 31) {
            index = 1;
        }
        if (indexCount.length > 6) {
            break;
        }
        // console.log(index);
        otherDayWeatherList.list.forEach((fw) => {

            let dtt = fw.dt * 1000; //convert UTC to millisecound 
            let nttDate = new Date(dtt) // get current date from millisecound
            // console.log(nttDate.getDate());
            if (nttDate.getDate() == index) {
                // console.log(fw.dt_txt);
                tempArray[index] = fw;
            }

        })
    };

    // console.log(tempArray);
}

// document.getElementById('test').addEventListener('click', ()=>{
//     console.log(nextFourDay);


forceCat.list.forEach(wl => {
    console.log("from archive data :" + wl.weather[0].main);
})

// });