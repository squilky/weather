const LOGGING = false;
const DELAY = 100000; //1800000ms is 5 minutes
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
		url : "http://api.wunderground.com/api/" + apiKey + "/history20170123/conditions/q/SC/Fort_Mill.json",
		dataType : "jsonp",
		success : function(parsed_json) {
			var location = parsed_json['location']['city'];
		        var tempmax = parsed_json['history']['dailysummary'][0]['maxtempi']	
		        var tempmin = parsed_json['history']['dailysummary'][0]['mintempi']	
                        var tempmean = parsed_json['history']['dailysummary'][0]['meantempi'] 
                        var windmax = parsed_json['history']['dailysummary'][0]['maxwspdi']
                        var vismean = parsed_json['history']['dailysummary'][0]['meanvisi']  
			var wt = document.getElementById('weatherTable');			
			var newRow = wt.insertRow(1);
			var cell0 = newRow.insertCell(0);
			var cell1 = newRow.insertCell(1);
			var cell2 = newRow.insertCell(2);
			var cell3 = newRow.insertCell(3);
			var cell4 = newRow.insertCell(4);
			var cell5 = newRow.insertCell(5);
			
			cell0.innerHTML = counter;
			cell1.innerHTML = sampleTime;
			cell2.innerHTML = tempmax;
			cell3.innerHTML = feelsLikeF;
			cell4.innerHTML = humidityString;
			cell5.innerHTML = weather;
			cell6.innerHTML = windStr;
			cell7.innerHTML = precipString;
			
			
			if( LOGGING ){
			}
		}
	});
}
