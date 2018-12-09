import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import WhenSelect from '@/components/WeatherInfo'
import { WeatherDataMock as propsData } from './mocks/WeatherData'
import { initialState as state } from '@/store/initialState'

const localVue = createLocalVue()
localVue.use(Vuex)

// @TODO
// These tests are not really working
// Vue re-renders after the initial prop object is processed

describe('WhenSelect', () => {

  let store

  beforeEach(() => {
    store = new Vuex.Store({
      state
    })
  })

  it('has correct markup', () => {
    const wrapper = shallowMount(WhenSelect, {
      propsData,
      localVue,
      store
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
