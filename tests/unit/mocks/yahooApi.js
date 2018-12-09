// Query, ansswer and reply for getWeather({ lat: '50', lon: '1'}, 'now', 'basic')
export const BasicNowQuery = 'https://query.yahooapis.com/v1/public/yql?format=json&q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20in%0A%20%20%20%20%20%20%20%20%28select%20place.woeid%20from%20flickr.places%281%29%0A%20%20%20%20where%20lat%3D%2250%22%20and%20lon%3D%221%22%0A%20%20%20%20and%20api_key%3D%22232bfa55946cbf6501032f538de85503%22%29%20and%20u%3D%27c%27'
export const BasicNowAnswer = '{"query":{"count":1,"created":"2018-12-09T11:03:44Z","lang":"es","results":{"channel":{"item":{"condition":{"code":"12","date":"Sun, 09 Dec 2018 11:00 AM CET","temp":"10","text":"Rain"}}}}}}'
export const BasicNowReply = {"code": "12", "date": "Sun, 09 Dec 2018 11:00 AM CET", "temp": "10", "text": "Rain"}

// Query, ansswer and reply for getWeather({ lat: '50', lon: '1'}, 'tomorrow', 'basic')
export const BasicTomorrowQuery = 'https://query.yahooapis.com/v1/public/yql?format=json&q=select%20item.forecast%20from%20weather.forecast%20where%20woeid%20in%0A%20%20%20%20%20%20%20%20%28select%20place.woeid%20from%20flickr.places%281%29%0A%20%20%20%20where%20lat%3D%2250%22%20and%20lon%3D%221%22%0A%20%20%20%20and%20api_key%3D%22232bfa55946cbf6501032f538de85503%22%29%20and%20u%3D%27c%27%0A%20%20%20%20%20%20%20%20limit%201'
export const BasicTomorrowAnswer = '{"query":{"count":1,"created":"2018-12-09T11:18:48Z","lang":"es","results":{"channel":{"item":{"forecast":{"code":"12","date":"09 Dec 2018","day":"Sun","high":"10","low":"8","text":"Rain"}}}}}}'
export const BasicTomorrowReply = {"code": "12", "date": "09 Dec 2018", "day": "Sun", "high": "10", "low": "8", "text": "Rain"}

// Query, ansswer and reply for getWeather({ text: 'Barcelona' }, '', 'pro')
export const ProQuery = 'https://query.yahooapis.com/v1/public/yql?format=json&q=select%20%2A%20from%20weather.forecast%20where%20woeid%20in%0A%20%20%20%20%20%20%20%20%28select%20woeid%20from%20geo.places%281%29%20where%20text%3D%22Barcelona%22%29%20and%20u%3D%27c%27'
export const ProAnswer = '{"query":{"count":1,"created":"2018-12-09T11:28:57Z","lang":"es","results":{"channel":{"units":{"distance":"km","pressure":"mb","speed":"km/h","temperature":"C"},"title":"Yahoo! Weather - Barcelona, Catalonia, ES","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-753692/","description":"Yahoo! Weather for Barcelona, Catalonia, ES","language":"en-us","lastBuildDate":"Sun, 09 Dec 2018 12:28 PM CET","ttl":"60","location":{"city":"Barcelona","country":"Spain","region":" Catalonia"},"wind":{"chill":"52","direction":"315","speed":"19.31"},"atmosphere":{"humidity":"63","pressure":"34405.72","rising":"0","visibility":"25.91"},"astronomy":{"sunrise":"8:6 am","sunset":"5:22 pm"},"image":{"title":"Yahoo! Weather","width":"142","height":"18","link":"http://weather.yahoo.com","url":"http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif"},"item":{"title":"Conditions for Barcelona, Catalonia, ES at 11:00 AM CET","lat":"41.39917","long":"2.15397","link":"http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-753692/","pubDate":"Sun, 09 Dec 2018 11:00 AM CET","condition":{"code":"32","date":"Sun, 09 Dec 2018 11:00 AM CET","temp":"12","text":"Sunny"},"forecast":[{"code":"30","date":"09 Dec 2018","day":"Sun","high":"17","low":"5","text":"Partly Cloudy"},{"code":"30","date":"10 Dec 2018","day":"Mon","high":"14","low":"6","text":"Partly Cloudy"},{"code":"28","date":"11 Dec 2018","day":"Tue","high":"14","low":"6","text":"Mostly Cloudy"},{"code":"30","date":"12 Dec 2018","day":"Wed","high":"13","low":"5","text":"Partly Cloudy"},{"code":"28","date":"13 Dec 2018","day":"Thu","high":"12","low":"6","text":"Mostly Cloudy"},{"code":"30","date":"14 Dec 2018","day":"Fri","high":"14","low":"6","text":"Partly Cloudy"},{"code":"30","date":"15 Dec 2018","day":"Sat","high":"15","low":"5","text":"Partly Cloudy"},{"code":"30","date":"16 Dec 2018","day":"Sun","high":"15","low":"8","text":"Partly Cloudy"},{"code":"28","date":"17 Dec 2018","day":"Mon","high":"15","low":"7","text":"Mostly Cloudy"},{"code":"28","date":"18 Dec 2018","day":"Tue","high":"15","low":"7","text":"Mostly Cloudy"}],"description":"","guid":{"isPermaLink":"false"}}}}}}'
export const ProReply = {"channel": {"astronomy": {"sunrise": "8:6 am", "sunset": "5:22 pm"}, "atmosphere": {"humidity": "63", "pressure": "34405.72", "rising": "0", "visibility": "25.91"}, "description": "Yahoo! Weather for Barcelona, Catalonia, ES", "image": {"height": "18", "link": "http://weather.yahoo.com", "title": "Yahoo! Weather", "url": "http://l.yimg.com/a/i/brand/purplelogo//uh/us/news-wea.gif", "width": "142"}, "item": {"condition": {"code": "32", "date": "Sun, 09 Dec 2018 11:00 AM CET", "temp": "12", "text": "Sunny"}, "description": "", "forecast": [{"code": "30", "date": "09 Dec 2018", "day": "Sun", "high": "17", "low": "5", "text": "Partly Cloudy"}, {"code": "30", "date": "10 Dec 2018", "day": "Mon", "high": "14", "low": "6", "text": "Partly Cloudy"}, {"code": "28", "date": "11 Dec 2018", "day": "Tue", "high": "14", "low": "6", "text": "Mostly Cloudy"}, {"code": "30", "date": "12 Dec 2018", "day": "Wed", "high": "13", "low": "5", "text": "Partly Cloudy"}, {"code": "28", "date": "13 Dec 2018", "day": "Thu", "high": "12", "low": "6", "text": "Mostly Cloudy"}, {"code": "30", "date": "14 Dec 2018", "day": "Fri", "high": "14", "low": "6", "text": "Partly Cloudy"}, {"code": "30", "date": "15 Dec 2018", "day": "Sat", "high": "15", "low": "5", "text": "Partly Cloudy"}, {"code": "30", "date": "16 Dec 2018", "day": "Sun", "high": "15", "low": "8", "text": "Partly Cloudy"}, {"code": "28", "date": "17 Dec 2018", "day": "Mon", "high": "15", "low": "7", "text": "Mostly Cloudy"}, {"code": "28", "date": "18 Dec 2018", "day": "Tue", "high": "15", "low": "7", "text": "Mostly Cloudy"}], "guid": {"isPermaLink": "false"}, "lat": "41.39917", "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-753692/", "long": "2.15397", "pubDate": "Sun, 09 Dec 2018 11:00 AM CET", "title": "Conditions for Barcelona, Catalonia, ES at 11:00 AM CET"}, "language": "en-us", "lastBuildDate": "Sun, 09 Dec 2018 12:28 PM CET", "link": "http://us.rd.yahoo.com/dailynews/rss/weather/Country__Country/*https://weather.yahoo.com/country/state/city-753692/", "location": {"city": "Barcelona", "country": "Spain", "region": " Catalonia"}, "title": "Yahoo! Weather - Barcelona, Catalonia, ES", "ttl": "60", "units": {"distance": "km", "pressure": "mb", "speed": "km/h", "temperature": "C"}, "wind": {"chill": "52", "direction": "315", "speed": "19.31"}}}