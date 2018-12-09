import { shallowMount } from '@vue/test-utils'
import Basic from '@/views/Basic'
import Pro from '@/views/Pro'

describe('Views', () => {
  it('Basic view has correct markup', () => {
    const wrapper = shallowMount(Basic)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('Pro view has correct markup', () => {
    const wrapper = shallowMount(Pro)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
