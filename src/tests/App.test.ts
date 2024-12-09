import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import App from '../App.vue'

describe('App.vue', () => {
  it('renders RouterView', () => {
    const wrapper = mount(App, {
      global: {
        stubs: ['RouterView'],
      },
    })
    expect(wrapper.html()).toContain('<router-view-stub></router-view-stub>')
  })
})
