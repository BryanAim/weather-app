class UI {
  constructor() {
    this.location  = document.getElementById('weather-location');
    this.desc      = document.getElementById('weather-desc');
    this.icon      = document.getElementById('w-icon');
    this.feelsLike = document.getElementById('w-feels-like');
    this.humidity  = document.getElementById('w-humidity');
    this.details   = document.getElementById('w-details');
    this.temp      = document.getElementById('w-temp');
    this.wind      = document.getElementById('w-wind');
  }

  feed(weather) {
    this.location.textContent = `${weather.name}, ${weather.sys.country}`;
    this.desc.textContent = weather.weather[0].description;
    this.icon.setAttribute('src',`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`)
    this.feelsLike.textContent = `${(Number(weather.main.feels_like)-273.15).toFixed(1)} °C`;
    this.humidity.textContent = `${weather.main.humidity} %`;
    this.wind.textContent = `${weather.wind.speed}  m/s`;
    // Convert from Kelvin to Fahrenheit and to Celsius
    this.temp.textContent = `${(Number(weather.main.temp)- 273.15).toFixed(1) } °C`
  }
}