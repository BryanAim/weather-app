class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.day      = document.getElementById('w-day')
    this.date     = document.getElementById('w-date');
    this.day2date = document.getElementById('w-day2date');
    this.day3date = document.getElementById('w-day3date');
    this.day4date = document.getElementById('w-day4date');
    this.day5date = document.getElementById('w-day5date');
    this.desc     = document.getElementById('w-desc');
    this.icon     = document.getElementById('w-icon');
    this.d2icon   = document.getElementById('w-d2icon');
    this.d3icon   = document.getElementById('w-d3icon');
    this.d4icon   = document.getElementById('w-d4icon');
    this.d5icon   = document.getElementById('w-d5icon');
    this.minTemp   = document.getElementById('w-min-temp');
    this.maxTemp   = document.getElementById('w-max-temp');

    this.feelsLike   = document.getElementById('w-feels-like');
    this.humidity    = document.getElementById('w-humidity');
    this.details     = document.getElementById('w-details');
    this.temp        = document.getElementById('w-temp');
    this.d2temp      = document.getElementById('w-d2temp');
    this.d3temp      = document.getElementById('w-d3temp');
    this.d4temp      = document.getElementById('w-d4temp');
    this.d5temp      = document.getElementById('w-d5temp');
    this.wind        = document.getElementById('w-wind');
    this.lastFetched = document.getElementById('w-last-fetched');
  }

  feed(weather) {
    // Change dateTime to human readable
    let dt = `${weather[0].dt}`
    let daysArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let shortDaysArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let monthsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    // Convert timestamp to milliseconds
    var date = new Date(dt * 1000);

    this.day.textContent = daysArr[date.getDay()]
    this.date.textContent = new Date().toLocaleDateString(undefined, {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
  });
    let d2formattedDate = new Date(Number(`${weather[1].dt}` * 1000));

    this.day2date.textContent = shortDaysArr[d2formattedDate.getDay()];

    let d3formattedDate = new Date(Number(`${weather[2].dt}` * 1000));
    this.day3date.textContent = shortDaysArr[d3formattedDate.getDay()];

    let d4formattedDate = new Date(Number(`${weather[3].dt}` * 1000));
    this.day4date.textContent = shortDaysArr[d4formattedDate.getDay()];

    let d5formattedDate = new Date(Number(`${weather[4].dt}` * 1000));
    this.day5date.textContent = shortDaysArr[d5formattedDate.getDay()];

    this.minTemp.textContent = `${(weather[0].main.temp_min.toFixed(0))} °C`;
    this.maxTemp.textContent = `${(weather[0].main.temp_max.toFixed(0))} °C`;
    this.d2temp.textContent = `${(weather[1].main.temp.toFixed(0))} °C`;
    this.d3temp.textContent = `${(weather[2].main.temp).toFixed(0)} °C`;
    this.d4temp.textContent = `${(weather[3].main.temp.toFixed(0))} °C`;
    this.d5temp.textContent = `${(weather[4].main.temp.toFixed(0))} °C`;
    
    let cityName =localStorage.getItem('city');
    this.location.textContent = cityName.charAt(0).toUpperCase() + cityName.substring(1) ;
    this.desc.textContent = weather[0].weather[0].description;

    this.icon.setAttribute('src', `https://openweathermap.org/img/w/${weather[0].weather[0].icon}.png`);
    this.d2icon.setAttribute('src', `https://openweathermap.org/img/w/${weather[1].weather[0].icon}.png`);
    this.d3icon.setAttribute('src', `https://openweathermap.org/img/w/${weather[2].weather[0].icon}.png`);
    this.d4icon.setAttribute('src', `https://openweathermap.org/img/w/${weather[3].weather[0].icon}.png`);
    this.d5icon.setAttribute('src', `https://openweathermap.org/img/w/${weather[4].weather[0].icon}.png`);
    this.feelsLike.textContent = `${(weather[0].main.feels_like).toFixed(0)}°C`;
    this.humidity.textContent = `${weather[0].main.humidity} %`;
    this.wind.textContent = `${weather[0].wind.speed} m/s`;

    this.temp.textContent = `${(weather[0].main.temp).toFixed(0)}°`
    this.lastFetched.textContent = `${weather[0].dt_txt}`
  }
}