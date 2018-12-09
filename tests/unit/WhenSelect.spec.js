import { shallowMount } from '@vue/test-utils'
import WhenSelect from '@/components/WeatherInfo'

fdescribe('WhenSelect', () => {
  it('has correct markup', () => {
    const wrapper = shallowMount(WhenSelect)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
