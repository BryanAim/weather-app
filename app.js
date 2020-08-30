// Initiate weather object
const weather = new Weather('london','uk');

// Initiate UI object
const ui = new UI()

// Get weather on DOM Load

document.addEventListener('DOMContentLoaded', getWeather)

weather.changeLocation('nakuru');

function getWeather() {
  weather.getWeather()
.then(result => {
  console.log(result);
  ui.feed(result)
})
.catch(error=> console.log(error));
}

