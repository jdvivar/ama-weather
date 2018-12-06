import { stringify } from 'query-string'

const endpoint = 'https://query.yahooapis.com/v1/public/yql'
const format = 'json'

/*
* Private function to get the right YQL query
*/
function getYQLQuery (location, when) {
  if (when === 'now') {
    // Note item.condition
    return `select item.condition from weather.forecast where woeid in
        (${getYQLLocationQuery(location)}) and u='c'`
  } else if (when === 'tomorrow') {
    // Note item.forecast and limit 1
    return `select item.forecast from weather.forecast where woeid in
        (${getYQLLocationQuery(location)}) and u='c'
        limit 1`
  }
}

function getYQLLocationQuery ({ text, lat, lon }) {
  if (lat && lon) {
    // This is not production-ready code, that API KEY should be saved
    // in an environment variable
    // It took me so much time to discover how to do this with only Yahoo APIs
    // that I helped in stackoverflow with an answer:
    // https://stackoverflow.com/questions/10715381/yahoo-yql-find-city-woeid-by-coordinates/53642481#53642481
    return `select place.woeid from flickr.places(1)
    where lat="${lat}" and lon="${lon}"
    and api_key="232bfa55946cbf6501032f538de85503"`
  } else {
    return `select woeid from geo.places(1) where text="${text}"`
  }
}

/*
* Private function to deconstruct the answer from the API
*/
function deconstruct (answer, when) {
  if (when === 'now') {
    return answer.query.results.channel.item.condition
  } else if (when === 'tomorrow') {
    return answer.query.results.channel.item.forecast
  }
}

/*
* Public asynchronous function to return a basic weather object
*/
export async function basicWeather (location, when) {
  const q = getYQLQuery(location, when)
  const query = `${endpoint}?${stringify({ q, format })}`
  try {
    // Fetch API is only for modern browsers
    // I'd use axios for production-ready code
    const answer = await (await fetch(query)).json()
    return deconstruct(answer, when)
  } catch (error) {
    return { error }
  }
}
