const humidityEl = document.getElementById("humidity");
const windSpeedEl = document.getElementById("windSpeed");
const temperatureEl = document.getElementById("temperature");
const locationEl = document.getElementById("location");
const searchbtn = document.getElementById('searchbtn');
var cities = [''];
const cityButton = document.getElementById('button-view');
var city = $("#searchInput").val();
var apikey = 'e664809273a9e730273447cbf35d1018';
var dailyURL = 'https://api.openweathermap.org/data/2.5/weather';
var forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' ;


// Button Event
$("#searchbtn").on("click", function(event) {
    event.preventDefault();

// Using Ajax to call for current weather  
    $.ajax({
        url: dailyURL,
        dataType: 'json',
        method: "GET",
        data: {q:city, appid: apikey, units: 'metric'},
    })

    .then(function(data) {
        var tempData = '';
        var humdityData = '';
        var windSpeedData = '';
        var icon = '';
        $.each(data.weather, function(index, val) {
            tempData = data.main.temp;
            humdityData = data.main.humidity;
            windSpeedData = data.wind.speed;
            icon = "<img src =" + data.weather[0].icon + ".png>";  
        });
        $('#icon').html(icon);
        $('#temperature').html(tempData);
        $('#humidity').html(humdityData);
        $('#windSpeed').html(windSpeedData);
    });
// Testing Fetch 
//    fetch ('https://api.openweathermap.org/data/2.5/forecast?q=London,uk&appid=e664809273a9e730273447cbf35d1018&unit=metric')
//        .then(response => response.json())
//        .then(data => console.log(data))
// Using Ajax to call for forecast 
    /*$.ajax({
        url: forecastURL,
        dataType: 'json',
        method: "GET",
        data: {q:city, appid: apikey, units: 'metric'}
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .then(function(data) {
        var dayData = '';
        $.each(data.weather, function(index, val) {
            var dayData = data.main.temp;
        })    

        $('#forecastDay').html(dayData);*/
        
});

// Display Previous Searches 
searchbtn.addEventListener('click', function () {
    var searchAnswer = $("#searchInput").val();
    // localStorage.setItem('history', searchAnswer);
    for (var i = 0; i < cities.length; i++) {
        var newCity = $("<button>");
        // Adding a class of movie to our button
        newCity.addClass("city");
        // Adding a data-attribute
        newCity.attr("data-name", cities[i]);
        // Providing the initial button text
        newCity.text(searchAnswer);
        // Adding the button to the HTML
        $("#buttons-view").append(newCity);
    };
    //document.querySelector('#location').innerHTML=searchAnswer;
    // $('div.searchResults').append(searchAnswer);
}, false);

// Previous Results Search 
/*cityButton.addEventListener('click', function(){
    event.preventDefault();
})*/


/*function weatherData() {
    let headers = new Headers
    return fetch({
        url: 'https://api.openweathermap.org/data/2.5/forecast',
        dataType:'json',
        method: 'GET',
        header: headers,
        data: {q:city, appid: key, units:'metric'},
    }).then(response => {
        return response.json();
    });
}*/
 






