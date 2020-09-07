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
    this.dewPoint  = document.getElementById('w-dew-point');
    this.day2      = document.getElementById('day-2');
    this.day3      = document.getElementById('day-3');
    this.day4      = document.getElementById('day-4');
    this.day5      = document.getElementById('day-5');

    // WEEK images
    this.day2img      = document.getElementById('img-d2');
    this.day3img      = document.getElementById('img-d3');
    this.day4img      = document.getElementById('img-d4');
    this.day5img      = document.getElementById('img-d5');

    // Week weather description
    this.day2desc      = document.getElementById('desc-d2');
    this.day3desc      = document.getElementById('desc-d3');
    this.day4desc      = document.getElementById('desc-d4');
    this.day5desc      = document.getElementById('desc-d5');
  }

  feed(weather) {
    this.location.textContent = `${weather.timezone}`;
    this.time.textContent = new Date(Number(`${weather.current.dt}`*1000)).toLocaleDateString("en-US");
    this.desc.textContent = weather.current.weather[0].description;
    this.icon.setAttribute('src',`http://openweathermap.org/img/w/${weather.current.weather[0].icon}.png`)
    this.feelsLike.textContent = `${weather.current.feels_like} °C`;
    this.humidity.textContent  = `${weather.current.humidity} %`;
    this.wind.textContent      = `${weather.current.wind_speed} m/s`;
    this.temp.textContent      = `${weather.current.temp} °C`;
    this.dewPoint.textContent  = `${weather.current.dew_point} °C`;

    // Days
    this.day2.textContent = new Date(Number(`${weather.daily[1].dt}`*1000)).toLocaleDateString("en-US");
    this.day3.textContent = new Date(Number(`${weather.daily[2].dt}`*1000)).toLocaleDateString("en-US");
    this.day4.textContent = new Date(Number(`${weather.daily[3].dt}`*1000)).toLocaleDateString("en-US");
    this.day5.textContent = new Date(Number(`${weather.daily[4].dt}`*1000)).toLocaleDateString("en-US");
    
    // Images
    this.day2img.setAttribute('src',`http://openweathermap.org/img/w/${weather.daily[1].weather[0].icon}.png`);
    this.day3img.setAttribute('src',`http://openweathermap.org/img/w/${weather.daily[2].weather[0].icon}.png`);
    this.day4img.setAttribute('src',`http://openweathermap.org/img/w/${weather.daily[3].weather[0].icon}.png`);
    this.day5img.setAttribute('src',`http://openweathermap.org/img/w/${weather.daily[4].weather[0].icon}.png`);

    // Descriptions
    this.day2desc.textContent = weather.daily[1].weather[0].description;
    this.day3desc.textContent = weather.daily[2].weather[0].description;
    this.day4desc.textContent = weather.daily[3].weather[0].description;
    this.day5desc.textContent = weather.daily[4].weather[0].description;
}
}