import { shallowMount } from '@vue/test-utils'
import WhenSelect from '@/components/WeatherInfo'
import WeatherDataMock from './mocks/WeatherData'

fdescribe('WhenSelect', () => {
  it('has correct markup', () => {
    const wrapper = shallowMount(WhenSelect, WeatherDataMock)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
