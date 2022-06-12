// store city value
let city = $("#cityName").val();

const key = "&appid=600ed8a4214e3c2ac55bea638db12b58"

let date = new Date();

$("#cityName").keypress(function(event) { 	
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

    $.ajax({
        url: callUrl,
        method: "GET"
      })
      .then(function (response){
    
        console.log(response)
    
        console.log(response.name)
        console.log(response.weather[0].icon)
    
        let tempF = (response.main.temp - 273.15) * 1.80 + 32;
        console.log(Math.floor(tempF))
    
        console.log(response.main.humidity)
    
        console.log(response.wind.speed)
        })
      });

      //make list

      //function to get conditions

      //get temp and convert to fahrenheit

      //function to set content

      //append application

      //function to get forcast

