import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import BasicWeather from '@/components/BasicWeather'
const localVue = createLocalVue()

describe('BasicWeather', () => {

  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state: {}
    })
  })

  it('has correct markup', () => {
    const wrapper = shallowMount(BasicWeather)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
