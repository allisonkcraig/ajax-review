// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    // TODO: get the fortune and show it in the fortune-text div
    $.get('/fortune', function(data) {
    	$('#fortune-text').html(data)
    })
   
}

$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();
    var url = "/weather?zipcode=" + $("#zipcode-field").val(); 
    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get(url, function(data) {

    
    	console.log(data)
    	console.log(url)

    	$('#weather-info').html(data.forecast + "<br>" + data.temp); //dot notation for attirbute of object
    })

    
}

$("#weather-form").on('submit', showWeather);