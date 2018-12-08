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
      locate me
    </div>
    <div class="line" v-if="showSearching">
      locating
      <span class="loading-dots">
        <span>.</span><span>.</span><span>.</span>
      </span>
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
          const { coords:
            { latitude: lat, longitude: lon }
          } = await getCurrentPosition()
          this.showSearching = false
          this.$store.commit('setLocation', { text: oldText, lat, lon })
        } catch (error) {
          // Error code 1 is browser has no permission to locate
          this.showHelp = error.code === 1
          console.log(error);
        }
      } else if (text) {
        this.$store.commit('setLocation', { text })
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.loading-dots span {
  animation-name: blink;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;

  &:nth-child(2) {
    animation-delay: .2s;
  }

  &:nth-child(3) {
    animation-delay: .4s;
  }
}

@keyframes blink {
  0% {
    opacity: .2;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: .2;
  }
}

</style>
