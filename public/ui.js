class UI {
  constructor() {
    this.location  = document.getElementById('w-location');
    this.desc      = document.getElementById('w-desc');
    this.icon      = document.getElementById('w-icon');
    this.feelsLike = document.getElementById('w-feels-like');
    this.humidity  = document.getElementById('w-humidity');
    this.details   = document.getElementById('w-details');
    this.temp      = document.getElementById('w-temp');
    this.wind      = document.getElementById('w-wind');
  }

  feed(weather) {
    this.location.textContent = `${weather.lon}, ${weather.lat}`;
    this.desc.textContent = weather.current.weather[0].description;
    this.icon.setAttribute('src',`http://openweathermap.org/img/w/${weather.current.weather[0].icon}.png`)
    this.feelsLike.textContent = `Feels like: ${(Number(weather.current.feels_like)-273.15).toFixed(2)}°C`;
    this.humidity.textContent = `Humidity: ${weather.current.humidity} %`;
    this.wind.textContent = `Wind Speed: ${weather.current.wind_speed} m/s`;
    // Convert from Kelvin to Fahrenheit and to Celsius
    this.temp.textContent = `${(Number(weather.current.temp)- 273.15).toFixed(2) } °C`
  }
}