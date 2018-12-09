import { shallowMount } from '@vue/test-utils'
import LoadingDots from '@/components/LoadingDots'

describe('LoadingDots', () => {
  it('has correct markup', () => {
    const wrapper = shallowMount(LoadingDots)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
