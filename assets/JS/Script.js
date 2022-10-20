//Page Elements
var currentLoactionElement = $("#current-location");
var currentTempElement = $("#current-temp");
var currentWindElement = $("#current-wind");
var currentHumidityElement = $("#current-humidity");
//Date & Time Elements
var dateTimeElement;
var now;

//API Link
var cityFetch = 'https://api.openweathermap.org/data/2.5/weather?q=Clinton,CT,US&appid=692f37fdfe0721f4d29af61dca2f5900&units=imperial'
//var geoFetch = 'http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}'

getApi();

function getApi(){
    fetch(cityFetch)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      currentLoactionElement.text(data.name);
      currentTempElement.text(data.main.feels_like + "f");
      currentWindElement.text(data.wind.speed + "mph");
      currentHumidityElement.text(data.main.humidity + "%");
    });

}



var UpdateTime = function(){
    now = moment();
    dateTimeElement.text(now.format('dddd, MMMM Do YYYY, h:mm a'));
}

$(document).ready(function(){
    dateTimeElement = $("#current-day");
    UpdateTime();
    setInterval(UpdateTime, 1000);
});