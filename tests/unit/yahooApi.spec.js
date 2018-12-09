import { fetchMock } from 'fetch-mock'
import { getWeather } from '@/services/yahooApi'
import {
  BasicNowQuery, BasicNowAnswer, BasicNowReply,
  BasicTomorrowQuery, BasicTomorrowAnswer, BasicTomorrowReply,
  ProQuery, ProAnswer, ProReply,
} from './mocks/yahooApi'

describe('Yahoo API service', () => {
  it('Weather data for basic now request', async () => {
    fetchMock.getOnce(BasicNowQuery, BasicNowAnswer)
    const fetchedData = await getWeather({ lat: '50', lon: '1'}, 'now', 'basic')
    expect(fetchedData).toEqual(BasicNowReply)
  })
  it('Weather data for basic tomorrow request', async () => {
    fetchMock.getOnce(BasicTomorrowQuery, BasicTomorrowAnswer)
    const fetchedData = await getWeather({ lat: '50', lon: '1'}, 'tomorrow', 'basic')
    expect(fetchedData).toEqual(BasicTomorrowReply)
  })
  it('Weather data for pro request', async () => {
    fetchMock.getOnce(ProQuery, ProAnswer)
    const fetchedData = await getWeather({ text: 'Barcelona' }, '', 'pro')
    expect(fetchedData).toEqual(ProReply)
  })
})
