<template>
  <div class="basic">
    <div class="wrapper">
      <TypeSelect />
      <div class="line">
        Forecast
      </div>
      <TimeSelect />
      <div class="line">
        In
      </div>
      <LocationSelect />
    </div>
    <BasicWeather />
  </div>
</template>

<script>
import TypeSelect from '@/components/TypeSelect.vue'
import TimeSelect from '@/components/TimeSelect.vue'
import LocationSelect from '@/components/LocationSelect.vue'
import BasicWeather from '@/components/BasicWeather.vue'

export default {
  name: 'basic',
  components: {
    TypeSelect,
    TimeSelect,
    LocationSelect,
    BasicWeather
  }
}
</script>

<style lang="scss">
@import '../styles/line';
@import '../styles/wrapper';
</style>
