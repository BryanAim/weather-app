// Initialize Storage
const storage = new Storage();

// Get Stored Location data
const weatherLocation = storage.getLocationData();

// Initiate weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Initiate UI object
const ui = new UI();

// Get weather on DOM Load

document.addEventListener('DOMContentLoaded', getWeather);

// Change Location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;


  // Change Location
  weather.changeLocation(city, state);

  // Save Location in Local Storage
  storage.setLocationData(city, state);

  // Get and display weather
  getWeather();

  // Close modal
  $('#locationModal').modal('hide');
})



function getWeather() {
  weather.getWeather()
  .then(result => {
  console.log(result);
  ui.feed(result)
})
.catch(error=> console.log(error));
}

