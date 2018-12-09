import { shallowMount } from '@vue/test-utils'
import LocationSelect from '@/components/LocationSelect'

describe('LocationSelect', () => {
  it('has correct markup', () => {
    const wrapper = shallowMount(LocationSelect)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
