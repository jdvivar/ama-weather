import { shallowMount, createLocalVue } from '@vue/test-utils'
import WeatherInfo from '@/components/WeatherInfo'
import { WeatherDataMock as propsData } from './mocks/WeatherData'

const localVue = createLocalVue()

// @TODO
// These tests are not really working
// Vue re-renders after the initial prop object is processed

describe('WeatherInfo', () => {
  it('has correct markup', () => {
    const wrapper = shallowMount(WeatherInfo, {
      localVue,
      propsData
    })
    return localVue.nextTick()
      .then(function () {
        expect(wrapper.html()).toMatchSnapshot()
      })
  })
})
