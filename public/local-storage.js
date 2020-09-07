class Storage {
  constructor() {
    this.long;
    this.lat;
    this.defaultLong = 36.7728897;
    this.defaultLat = -1.2999792;
  }

  getLocationData() {
    if (localStorage.getItem('long') === null) {
      this.long = this.defaultLong;
    } else {
      this.long = localStorage.getItem('long');
    }

    if (localStorage.getItem('lat') === null) {
      this.lat = this.defaultLat;
    } else {
      this.lat = localStorage.getItem('lat');
    }

    return {
      long: this.long,
      lat: this.lat
    }

  }

  setLocationData(long, lat) {
    localStorage.setItem('long', long);
    localStorage.setItem('lat', lat);
  }
}