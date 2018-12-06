<template>
  <div>
    <div
      class="line --interactive"
      :class="{ '--inactive': locationInput==='locate' }"
    >
      <input
        ref="location-input"
        class="line"
        v-if="showLocationInput"
        @focus="$event.target.select()"
        @keyup.enter="showLocationInput = false"
        @blur="showLocationInput = false"
        v-model.lazy="locationInput"
      >
      <div v-else @click="handleLocationClick">
        {{ location.text ? location.text : 'Type a place' }}
      </div>
    </div>
    <div
      class="line --interactive"
      :class="{ '--inactive': locationInput!=='locate' }"
      v-if="isGeolocationAvailable()"
      @click="locationInput = 'locate'"
    >
      ⦿ locate me
    </div>
    <div class="line loading-dots" v-if="showSearching">
      locating
    </div>
    <div class="line --error" v-if="showHelp">
      Please make sure the browser has location permissions
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getCurrentPosition, isGeolocationAvailable } from '@/services/geolocationApi'

export default {
  name: 'location-select',
  data: function () {
    return {
      showLocationInput: false,
      showHelp: false,
      showSearching: false,
      locationInput: this.$store.state.location.text
    }
  },
  computed: mapState([
    'location'
  ]),
  methods: {
    handleLocationClick: function () {
      this.locationInput = location.text
      this.showLocationInput = true
      this.$nextTick(function () {
        // The previous statement re-renders and the input doesn't exist in
        // that "tick" yet, so sending to the event loop the vue way
        this.$refs['location-input'].select()
      })
    },
    isGeolocationAvailable
  },
  watch: {
    locationInput: async function (text, oldText) {
      if (text === 'locate') {
        this.showSearching = true
        this.showHelp = false
        try {
          this.showSearching = false
          const { coords: { latitude: lat, longitude: lon } } = await getCurrentPosition()
          this.$store.commit('setLocation', { text: oldText, lat, lon })
        } catch (error) {
          this.showHelp = true
        }
      } else if (text) {
        this.$store.commit('setLocation', { text })
      }
    }
  }
}
</script>

<style scoped>

.loading-dots:after {
  content: ' .';
  animation: waiting-dots 1s steps(5, end) infinite;
}

@keyframes waiting-dots {
  0%, 20% {
    color: rgba(0,0,0,0);
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);
  }
  40% {
    color: white;
    text-shadow:
      .25em 0 0 rgba(0,0,0,0),
      .5em 0 0 rgba(0,0,0,0);
  }
  60% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 rgba(0,0,0,0);
  }
  80%, 100% {
    text-shadow:
      .25em 0 0 white,
      .5em 0 0 white;
  }
}

</style>
