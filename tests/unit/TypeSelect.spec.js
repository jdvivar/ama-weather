import { shallowMount } from '@vue/test-utils'
import TypeSelect from '@/components/TypeSelect'

describe('TypeSelect', () => {
  it('has correct markup', () => {
    const wrapper = shallowMount(TypeSelect)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
