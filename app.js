
// Initiate weather object

const weather = new Weather('london','uk');

weather.getWeather()
.then(result => console.log(result))
.catch(error=> console.log(error));
