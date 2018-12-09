import { shallowMount } from '@vue/test-utils'
import WeatherInfo from '@/components/WeatherInfo'

describe('WeatherInfo', () => {
  it('has correct markup', () => {
    const wrapper = shallowMount(WeatherInfo)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
