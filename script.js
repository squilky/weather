const LOGGING = false;
const DELAY = 300000; //300000ms is 5 minutes
const TD = 10000;  //test delay value
const apiKey = "727b71135fa8cced";
var counter = 0;
jQuery( document ).ready( function() {
	var timer = setInterval( getWeather, DELAY ); 
});
function getWeather(){
	counter++;
	$.ajax( {
		//get data from JSON feed
		url : "http://api.wunderground.com/api/" + apiKey + "/geolookup/conditions/q/VA/Bristow.json",
		dataType : "jsonp",
		success : function(parsed_json) {
			var location = parsed_json['location']['city'];
			var sampleTime = parsed_json['current_observation']['local_time_rfc822'];
			var tempString = parsed_json['current_observation']['temperature_string'];
			var feelsLikeF = parsed_json['current_observation']['feelslike_f'];
			var weather = parsed_json['current_observation']['weather'];
			var precipTodayString = parsed_json['current_observation']['precip_today_string'];
			var windStr = parsed_json['current_observation']['wind_string'];
			var wt = document.getElementById('weatherTable');			
			var newRow = wt.insertRow(1);
			var cell0 = newRow.insertCell(0);
			var cell1 = newRow.insertCell(1);
			var cell2 = newRow.insertCell(2);
			var cell3 = newRow.insertCell(3);
			var cell4 = newRow.insertCell(4);
			var cell5 = newRow.insertCell(5);
			var cell6 = newRow.insertCell(6);
			
			cell0.innerHTML = counter;
			cell1.innerHTML = sampleTime;
			cell2.innerHTML = tempString;
			cell3.innerHTML = feelsLikeF;
			cell4.innerHTML = weather;
			cell5.innerHTML = precipTodayString;
			cell6.innerHTML = windStr;
			
			if( LOGGING ){
			}
		}
	});
}
