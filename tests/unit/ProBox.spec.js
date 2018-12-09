import { shallowMount } from '@vue/test-utils'
import ProBox from '@/components/ProBox'

describe('ProBox', () => {
  it('has correct markup', () => {
    const wrapper = shallowMount(ProBox)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('has correct markup with title and data', () => {
    const wrapper = shallowMount(ProBox, {
      propsData: {
        title: 'Hello',
        data: {
          link: 'links are shown as A tags',
          code: 'codes are not relevant, therefore hidden',
          key: 'all others are shown as usual',
        }
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('has correct markup with title and image', () => {
    const wrapper = shallowMount(ProBox, {
      propsData: {
        title: 'Hello',
        image: 'imageUrl'
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
