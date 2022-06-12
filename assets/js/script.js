// store city value
let city = $("#cityName").val();

const key = "&appid=600ed8a4214e3c2ac55bea638db12b58"

let date = new Date();

$("#searchTerm").keypress(function(event) { 
	
	if (event.keyCode === 13) { 
		event.preventDefault();
		$("#searchBtn").click(); 
	} 
});

$("#searchBtn").on("click", function() {

    $('#forecastTitle').addClass('show');

    city = $("#cityName").val();

    //clears input value
    $("#cityName").val("");

    const callUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + key;

    console.log(callUrl);
});