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
let modal = document.getElementById('open-modal');

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  // const state = document.getElementById('state').value;


  // Change Location
  weather.changeLocation(city);

  // Save Location in Local Storage
  storage.setLocationData(city);

  // Get and display weather
  getWeather();

  document.getElementById('city').value = null
  // document.getElementById('state').value = null;

})



function getWeather() {
  weather.getWeather()
  .then(result => {
  console.log(result);
  ui.feed(result)
})
.catch(error=> console.log(error));
}

