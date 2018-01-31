import urllib;
import json;
import os;
os.system('clear')
f = urllib.urlopen('http://api.wunderground.com/api/727b71135fa8cced/geolookup/conditions/q/VA/Bristow.json')
json_string = f.read()

parsed_json = json.loads(json_string)

location = parsed_json['location']['city']

temp_f = parsed_json['current_observation']['temp_f']

wind_mph = parsed_json['current_observation']['wind_mph']

wind_dir = parsed_json['current_observation']['wind_dir']
precip_today_in = parsed_json['current_observation']['precip_today_in']

bar = parsed_json['current_observation']['pressure_trend']

print ("Current temperature in %s is: %s with %s mph winds out of the %s. There has been %s inches of precipitation today. The barometer is %s" % (location, temp_f, wind_mph, wind_dir, precip_today_in, bar))

# print("%s is %s years old, from %s." % (name, age, city))

f.close()
