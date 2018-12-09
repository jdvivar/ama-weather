import { shallowMount } from '@vue/test-utils'
import WeatherInfo from '@/components/WeatherInfo'
import WeatherDataMock from './mocks/WeatherData'

describe('WeatherInfo', () => {
  it('has correct markup', () => {
    const wrapper = shallowMount(WeatherInfo, WeatherDataMock)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
