<template>
  <div class="wrapper-inverse">
    <div class="line --inverse --error" v-if="error">
      {{ error }}
    </div>
    <div v-else>
      <weatherInfo :weatherData="weatherData" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getWeather } from '@/services/yahooApi'
import WeatherInfo from '@/components/WeatherInfo'

export default {
  name: 'pro-weather',
  components: {
    WeatherInfo
  },
  data: function () {
    return {
      weatherData: {},
      error: ''
    }
  },
  computed: mapState([
    'location',
    'when'
  ]),
  methods: {
    reset: function () {
      this.weatherData = {}
      this.error = ''
    },
    set: function (weatherData, error) {
      this.weatherData = weatherData
      this.error = error
    },
    updateWeather: async function () {
      this.reset()
      const { channel: weatherData, error} = await getWeather(this.location, this.when, 'pro')
      this.set(weatherData, error)
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
