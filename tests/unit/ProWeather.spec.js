import { shallowMount } from '@vue/test-utils'
import ProWeather from '@/components/ProWeather'

describe('ProWeather', () => {
  it('has correct markup', () => {
    const wrapper = shallowMount(ProWeather)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
