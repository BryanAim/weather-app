class Weather {
  constructor(city,state) {
    this.apiKey = 'fc5d1d3640c6d5841191dbe13c529396';
    this.city =  city;
    this .state = state;
  }

    // Fetch Weather from OpenWeather API

    async getWeather() {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`);

      const responseData = await response.json();

      return responseData;
    }
    

  // Change Weather location 

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }

}
