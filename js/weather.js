const API_KEY = "9cf5633042642ac3cb74b648ce4e36d4";

function geoOk(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data.name, data.weather[0].main);
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      weather.innerText = `${data.weather[0].main} / ${data.main.temp}°C`;
      city.innerText = data.name;
    });
}

function geoNo() {
  alert("Can not find your location.");
}

navigator.geolocation.getCurrentPosition(geoOk, geoNo);
