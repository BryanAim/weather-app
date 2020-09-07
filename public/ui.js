class UI {
  constructor() {
    this.location  = document.getElementById('w-location');
    this.date      = document.getElementById('w-date');
    this.desc      = document.getElementById('w-desc');
    this.icon      = document.getElementById('w-icon');
    this.feelsLike = document.getElementById('w-feels-like');
    this.humidity  = document.getElementById('w-humidity');
    this.details   = document.getElementById('w-details');
    this.temp      = document.getElementById('w-temp');
    this.wind      = document.getElementById('w-wind');
  }

  feed(weather) {
    this.location.textContent = `${weather.city.name}, ${weather.city.country}`;
    this.date.textContent     = `${weather.list[0].dt_txt}`;
    this.desc.textContent = weather.list[0].weather[0].description;
    this.icon.setAttribute('src',`http://openweathermap.org/img/w/${weather.list[0].weather[0].icon}.png`)
    this.feelsLike.textContent = `Feels like: ${weather.list[0].main.feels_like}°C`;
    this.humidity.textContent = `Humidity: ${weather.list[0].main.humidity} %`;
    this.wind.textContent = `Wind Speed: ${weather.list[0].wind.speed} m/s`;
    // Convert from Kelvin to Fahrenheit and to Celsius
    this.temp.textContent = `${weather.list[0].main.temp} °C`
  }
}