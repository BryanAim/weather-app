// Initiate weather object

const weather = new Weather('london','uk');

// Get weather on DOM Load

document.addEventListener('DOMContentLoaded', getWeather)

weather.changeLocation('nakuru');

function getWeather() {
  weather.getWeather()
.then(result => console.log(result))
.catch(error=> console.log(error));
}

