<template>
  <div class="line --interactive">
    <input
        ref="location-input"
        class="line"
        v-if="showLocationInput"
        @focus="$event.target.select()"
        @keyup.enter="showLocationInput = false"
        @blur="showLocationInput = false"
        v-model.lazy="locationInput">
    <div v-else @click="handleLocationClick">
      {{ location }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'location-select',
  data: function () {
    return {
      showLocationInput: false,
      locationInput: this.$store.state.location
    }
  },
  computed: mapState([
    'location'
  ]),
  methods: {
    handleLocationClick: function () {
      this.showLocationInput = true
      this.$nextTick(function () {
        // The previous statement re-renders and the input doesn't exist in
        // that "tick" yet, so sending to the event loop the vue way
        this.$refs['location-input'].select()
      })
    }
  },
  watch: {
    locationInput: function (newLocation) {
      if (newLocation) {
        this.$store.commit('setLocation', newLocation)
      }
    }
  }
}
</script>
