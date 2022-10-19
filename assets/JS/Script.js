var dateTimeElement;
var now;
//var fetchLink = "api.openweathermap.org/data/2.5/forecast/daily?lat=41.524300&lon=72.075821&cnt=5&appid=17c3c512eba29f875a67c16fb6f3765b"
$.ajax({
    url: 'http://api.openweathermap.org/geo/1.0/direct?q=Norwich,CT,3166-2:US&limit=3&appid=17c3c512eba29f875a67c16fb6f3765b',
    method: 'GET'
}).then(function(response){
    console.log(response);
})
var UpdateTime = function(){
    now = moment();
    dateTimeElement.text(now.format('dddd, MMMM Do YYYY, h:mm a'));
}

$(document).ready(function(){
    dateTimeElement = $("#current-day");
    UpdateTime();
    setInterval(UpdateTime, 1000);
})