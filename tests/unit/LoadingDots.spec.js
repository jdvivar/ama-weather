import { shallowMount } from '@vue/test-utils'
import LoadingDots from '@/components/LoadingDots'

describe('LoadingDots', () => {
  it('renders with 3 dots', () => {
    const wrapper = shallowMount(LoadingDots)
    expect(wrapper.text()).toMatch('...')
  })
})
