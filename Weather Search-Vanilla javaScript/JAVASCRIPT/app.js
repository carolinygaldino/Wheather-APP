//API KEY - OpenWeather //

let weather = {
  apikey: "3fff70b2ae483a91fdbaf7bda0fdd788",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apikey
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeather(data));
  },
  // Card Weather
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    /*console.log(name, icon, description, temp, humidity, speed);*/
    document.querySelector(".city").innerText = "Weather in " + name;
    // Icon
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind Speed: " + speed + " km/h ";
    //Hidden card on css/js -showing up after search
    document.querySelector(".card-weather").classList.remove("loading");
    //Image background - showing images relates to the city name
    document.body.style.backgroundImage =
      "URL('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};
// Click Button - Keyup Enter
document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});
document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
