// Initialize Storage
const storage = new Storage();

// Get Stored Location data
const weatherLocation = storage.getLocationData();

// Initiate weather object
const weather = new Weather(weatherLocation.long, weatherLocation.lat);

// Initiate UI object
const ui = new UI();

// Get weather on DOM Load

document.addEventListener('DOMContentLoaded', getWeather);

// Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const long = document.getElementById('long').value;
  const lat = document.getElementById('lat').value;


  // Change Location
  weather.changeLocation(long, lat);

  // Save Location in Local Storage
  storage.setLocationData(long, lat);

  // Get and display weather
  getWeather();

})

function getWeather() {
  weather.getWeather()
    .then(result => {
      console.log(result);
      ui.feed(result)
    })
    .catch(error => console.log(error));
}

