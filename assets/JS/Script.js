var dateTimeElement;
var now;

var UpdateTime = function(){
    now = moment();
    dateTimeElement.text(now.format('dddd, MMMM Do YYYY, h:mm a'));
}

$(document).ready(function(){
    dateTimeElement = $("#current-day");
    UpdateTime();
    setInterval(UpdateTime, 1000);
})