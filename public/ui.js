class UI {
  constructor() {
    this.location  = document.getElementById('w-location');
    this.time      = document.getElementById('w-time');
    this.desc      = document.getElementById('w-desc');
    this.icon      = document.getElementById('w-icon');
    this.feelsLike = document.getElementById('w-feels-like');
    this.humidity  = document.getElementById('w-humidity');
    this.details   = document.getElementById('w-details');
    this.temp      = document.getElementById('w-temp');
    this.wind      = document.getElementById('w-wind');
  }

  feed(weather) {
    this.location.textContent = `${weather.timezone}`;
    this.time.textContent = new Date(Number(`${weather.current.dt}`*1000)).toLocaleDateString("en-US");
    this.desc.textContent = weather.current.weather[0].description;
    this.icon.setAttribute('src',`http://openweathermap.org/img/w/${weather.current.weather[0].icon}.png`)
    this.feelsLike.textContent = `Feels like: ${weather.current.feels_like} °C`;
    this.humidity.textContent = `Humidity: ${weather.current.humidity} %`;
    this.wind.textContent = `Wind Speed: ${weather.current.wind_speed} m/s`;
    // Convert from Kelvin to Fahrenheit and to Celsius
    this.temp.textContent = `${weather.current.temp} °C`
  }
}