import { stringify } from 'query-string'

const endpoint = 'https://query.yahooapis.com/v1/public/yql'
const format = 'json'

/**
 * Get the right YQL query to get the weather info (private)
 * @param {Object} location
 * @param {Stting} when
 * @return {String} the YQL location query
 */
function getYQLQuery (location, when, type) {
  if (type === 'pro') {
    return `select * from weather.forecast where woeid in
        (${getYQLLocationQuery(location)}) and u='c'`
  }

  if (when === 'now') {
    // Note item.condition
    return `select item.condition from weather.forecast where woeid in
        (${getYQLLocationQuery(location)}) and u='c'`
  }

  if (when === 'tomorrow') {
    // Note item.forecast and limit 1
    return `select item.forecast from weather.forecast where woeid in
        (${getYQLLocationQuery(location)}) and u='c'
        limit 1`
  }
}

/**
 * Get an YQL location query (private)
 * @param {Object} location
 * @return {String} the YQL location query
 */
function getYQLLocationQuery ({ text, lat, lon, locate }) {
  if (locate && lat && lon) {
    // It took me so much time to discover how to do this with only Yahoo APIs
    // that I helped in stackoverflow with an answer:
    // https://stackoverflow.com/questions/10715381/yahoo-yql-find-city-woeid-by-coordinates/53642481#53642481
    return `select place.woeid from flickr.places(1)
    where lat="${lat}" and lon="${lon}"
    and api_key="${process.env.VUE_APP_FLICKR_API_KEY}"`
  } else {
    return `select woeid from geo.places(1) where text="${text}"`
  }
}

/**
 * It deconstructs the answer from the API's object tree (private)
 * @param {Object} answer
 * @param {String} when
 * @return {Object} the actual object we're interested in
 */
function getAnswer (answer, when, type) {
  if (type === 'pro') {
    return answer.query.results
  }

  if (when === 'now') {
    return answer.query.results.channel.item.condition
  }

  if (when === 'tomorrow') {
    return answer.query.results.channel.item.forecast
  }
}

/**
 * Get weather information (public)
 * @async
 * @param {Object} location - location object
 * @param {String} when - either now or tomorrow
 * @param {String} type - either pro or basic
 * @return {Object}
 */
export async function getWeather (location, when, type) {
  const q = getYQLQuery(location, when, type)
  const query = `${endpoint}?${stringify({ q, format })}`
  try {
    // Fetch API is only for modern browsers
    // I'd use axios for production-ready code
    const answer = await (await fetch(query)).json()
    return getAnswer(answer, when, type)
  } catch (error) {
    return { error }
  }
}
