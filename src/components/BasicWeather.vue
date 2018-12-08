<template>
  <div class="wrapper-inverse">
    <div class="line --inverse --error" v-if="error">
      {{ error }}
    </div>
    <div v-else>
      <div v-if="temperature" class="line --inverse">
        <LoadingDots v-if="temperature==='...'" />
        <div v-else>
          {{ temperature }}°C
        </div>
      </div>
      <div v-else class="line --inverse">
        {{ temperatureLow }} ~ {{ temperatureHigh }}°C
      </div>
      <div class="line --inverse">
        {{ conditionText }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getWeather } from '@/services/yahooApi'
import LoadingDots from '@/components/LoadingDots'

export default {
  name: 'basic-weather',
  components: {
    LoadingDots
  },
  data: function () {
    return {
      temperatureHigh: '',
      temperatureLow: '',
      temperature: '',
      conditionText: '',
      error: ''
    }
  },
  computed: mapState([
    'location',
    'when'
  ]),
  methods: {
    reset: function () {
      this.temperatureHigh = ''
      this.temperatureLow = ''
      this.temperature = '...'
      this.conditionText = ''
      this.error = ''
    },
    set: function (high, low, temp, text, error) {
      this.temperatureHigh = high
      this.temperatureLow = low
      this.temperature = temp
      this.conditionText = text
      this.error = error
    },
    updateWeather: async function () {
      this.reset()
      const { high, low, temp, text, error } = await getWeather(this.location, this.when, 'basic')
      this.set(high, low, temp, text, error)
      if (error) {
        if (error.message.includes('Cannot read property')) {
          this.error = 'Can\'t find that, please type another place 😅'
        } else if (error.message.includes('Failed to fetch')) {
          this.error = 'Network error, please try later'
        } else {
          this.error = 'Something went reeeeeally wrong'
        }
      }
    }
  },
  mounted: function () {
    this.updateWeather()
  },
  watch: {
    location: function () {
      this.updateWeather()
    },
    when: function () {
      this.updateWeather()
    }
  }
}
</script>
