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
        
        getConditions(response);
        makeList();
        })
      });

      //make list
      function makeList() {
        let listItem = $("<li>").addClass("list-group-item").text(city);
        $(".list").append(listItem);
      }

      //function to get conditions
      function getConditions (response) {

        //get temp and convert to fahrenheit
        let tempF = (response.main.temp - 273.15) * 1.80 + 32;
        tempF = Math.floor(tempF);
    
        $('#currentCity').empty();
    
        //function to set content
        const card = $("<div>").addClass("card");
        const cardBody = $("<div>").addClass("card-body");
        const city = $("<h4>").addClass("card-title").text(response.name);
        const cityDate = $("<h4>").addClass("card-title").text(date.toLocaleDateString('en-US'));
        const temperature = $("<p>").addClass("card-text current-temp").text("Temperature: " + tempF + " °F");
        const humidity = $("<p>").addClass("card-text current-humidity").text("Humidity: " + response.main.humidity + "%");
        const wind = $("<p>").addClass("card-text current-wind").text("Wind Speed: " + response.wind.speed + " MPH");
        const image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png")
    
        //append application
        city.append(cityDate, image)
        cardBody.append(city, temperature, humidity, wind);
        card.append(cardBody);
        $("#currentCity").append(card)
       
      }
      //function to get forcast

