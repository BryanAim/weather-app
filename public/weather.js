class Weather {
  constructor(long, lat) {
    this.apiKey = 'fc5d1d3640c6d5841191dbe13c529396';
    this.long = long;
    this.lat = lat;
  }

  // Fetch Weather from OpenWeather API

  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&
      exclude=hourly,daily&appid=${this.apiKey}`);

    const responseData = await response.json();
    console.log(responseData.current);
    return responseData;
  }


  // Change Weather location 

  changeLocation(long, lat) {
    this.long = long;
    this.lat = lat;
  }

}
