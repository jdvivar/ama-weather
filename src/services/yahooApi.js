import { stringify } from 'query-string'

const endpoint = 'https://query.yahooapis.com/v1/public/yql'
const format = 'json'

export async function basicWeather(location) {
  const q = `select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text="${location}") and u='c'`
  const query = `${endpoint}?${stringify({ q, format })}`
  try {
    // Fetch API is only for modern browsers
    // For production I'd use axios
    const answer = await fetch(query)
    return (await answer.json()).query.results.channel.item.condition
  } catch(error) {
    return { error }
  }
}
