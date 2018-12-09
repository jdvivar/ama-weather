import { shallowMount } from '@vue/test-utils'
import ProBox from '@/components/ProBox'

describe('ProBox', () => {
  it('has correct markup', () => {
    const wrapper = shallowMount(ProBox)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
