class Weather {
  constructor(city) {
    this.apiKey = 'fc5d1d3640c6d5841191dbe13c529396';
    this.city =  city;
    // this .state = state;
  }

    // Fetch Weather from OpenWeather API
    async getWeather() {

      try {
         let spinner = document.getElementById("spinner");
        spinner.removeAttribute("hidden");
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.city},${this.state}&units=metric&appid=${this.apiKey}`);

        const responseData = await response.json();
      // filter data to display only the 5 day forecast for a specific time
       let dayList = responseData.list.filter(day => {
        return day.dt_txt.endsWith("12:00:00")
      })

      if (dayList) {
        spinner.setAttribute("hidden", "");
        return dayList;
      }

      
      } catch (error) {
        spinner.setAttribute("hidden", "");
        this.location = document.getElementById('w-location');
        this.day      = document.getElementById('w-day')
        this.date     = document.getElementById('w-date');
        this.day2date = document.getElementById('w-day2date');
        this.day3date = document.getElementById('w-day3date');
        this.day4date = document.getElementById('w-day4date');
        this.day5date = document.getElementById('w-day5date');
        this.desc     = document.getElementById('w-desc');
        this.icon     = document.getElementById('w-icon');
        this.d2icon   = document.getElementById('w-d2icon');
        this.d3icon   = document.getElementById('w-d3icon');
        this.d4icon   = document.getElementById('w-d4icon');
        this.d5icon   = document.getElementById('w-d5icon');
    
        this.feelsLike   = document.getElementById('w-feels-like');
        this.humidity    = document.getElementById('w-humidity');
        this.details     = document.getElementById('w-details');
        this.temp        = document.getElementById('w-temp');
        this.d2temp      = document.getElementById('w-d2temp');
        this.d3temp      = document.getElementById('w-d3temp');
        this.d4temp      = document.getElementById('w-d4temp');
        this.d5temp      = document.getElementById('w-d5temp');
        this.wind        = document.getElementById('w-wind');
        this.lastFetched = document.getElementById('w-last-fetched');

        this.location.textContent = "Invalid City name, try again";
        this.day.textContent      = null;
        this.date.textContent     = null;
        this.day2date.textContent = null;
        this.day3date.textContent = null;
        this.day4date.textContent = null;
        this.day5date.textContent = null;
        this.desc.textContent     = null;
        this.icon.src     = null;
        this.d2icon.src   = null;
        this.d3icon.src   = null;
        this.d4icon.src   = null;
        this.d5icon.src   = null;
        this.feelsLike.textContent = null;
        this.humidity.textContent  = null
        // this.details.textContent = null;
        this.temp.textContent = null;
        this.d2temp.textContent = null;
        this.d3temp.textContent = null; 
        this.d4temp.textContent = null; 
        this.d5temp.textContent = null;
        this.wind.textContent = null;
        this.lastFetched.textContent = null;
      }  
    }

    

  // Change Weather location 

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }

}
