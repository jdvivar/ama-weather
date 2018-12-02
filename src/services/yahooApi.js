import { stringify } from 'query-string'

const endpoint = 'https://query.yahooapis.com/v1/public/yql'
const format = 'json'

function getYQLQuery (location, when) {
  if (when === 'now') {
    return `select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text="${location}") and u='c'`
  } else if (when === 'tomorrow') {
    return `select item.forecast from weather.forecast where woeid in (select woeid from geo.places(1) where text="${location}") and u='c' limit 1`
  }
}

function deconstruct (answer, when) {
  if (when === 'now') {
    return answer.query.results.channel.item.condition
  } else if (when === 'tomorrow') {
    return answer.query.results.channel.item.forecast
  }
}

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
