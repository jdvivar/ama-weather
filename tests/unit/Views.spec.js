import { shallowMount } from '@vue/test-utils'
import Basic from '@/views/Basic'
import Pro from '@/views/Pro'

describe('Views', () => {
  it('Has correct copy', () => {
    const wrapper = shallowMount(Basic)
    expect(wrapper.text()).toEqual(expect.stringContaining('Forecast'))
    expect(wrapper.text()).toEqual(expect.stringContaining('In'))
  })
})
