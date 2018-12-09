import { whenOptions } from './initialState'

export default {
  toggleWhen (state) {
    const currentIndex = whenOptions.indexOf(state.when)
    state.when = whenOptions[(currentIndex + 1) % whenOptions.length]
  },
  setLocation (state, location) {
    state.location = location
  }
}
