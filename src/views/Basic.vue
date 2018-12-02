<template>
  <div class="basic">
    <div class="wrapper">
      <TypeSelect />
      <div class="line">
        Forecast
      </div>
      <div class="line">
        {{ when }}
      </div>
      <div class="line">
        In
      </div>
      <div class="line-interactive">
        <input
            v-if="showLocationInput"
            @focus="$event.target.select()"
            @keyup.enter=" showLocationInput = false "
            @blur=" showLocationInput = false "
            class="line"
            v-model.lazy="location">
        <div v-else @click=" showLocationInput = true ">
          {{ location }}
        </div>
      </div>
    </div>
    <div class="wrapper-inverse">
      <div v-if="error">
        {{ error }}
      </div>
      <div v-else>
        <div class="line-inverse">
          {{ temperature }}°C
        </div>
        <div class="line-inverse">
          {{ conditionText }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { basicWeather } from '@/services/yahooApi'
import TypeSelect from '@/components/TypeSelect.vue'

export default {
  name: 'basic',
  components: {
    TypeSelect
  },
  data: function () {
    return {
      when: 'now',
      location: 'Madrid',
      temperature: '',
      conditionText: '',
      error: '',
      showLocationInput: false
    }
  },
  methods: {
    updateWeather: async function() {
      this.error = ''
      const { temp, text, error} = await basicWeather(this.location)
      this.temperature = temp
      this.conditionText = text
      if (error) {
        if (error.message.includes('Cannot read property')) {
          this.error = 'I can\'t find anything, type something else 😅'
        } else if (error.message.includes('Failed to fetch')) {
          this.error = 'Network error, please try later'
        } else {
          this.error = 'Something went really wrong'
        }
      }
    }
  },
  mounted: function() {
    this.updateWeather()
  },
  watch: {
    location: function(newLocation) {
      this.updateWeather()
    }
  }
}
</script>

<style lang="scss">
@import '../styles/line';
@import '../styles/wrapper';
</style>
