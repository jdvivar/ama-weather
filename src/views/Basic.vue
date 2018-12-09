<template>
  <div class="basic">
    <div class="wrapper">
      <TypeSelect />
      <div class="line">
        forecast
      </div>
      <WhenSelect />
      <div class="line">
        in
      </div>
      <LocationSelect />
    </div>
    <BasicWeather />
  </div>
</template>

<script>
import TypeSelect from '@/components/TypeSelect'
import WhenSelect from '@/components/WhenSelect'
import LocationSelect from '@/components/LocationSelect'
import BasicWeather from '@/components/BasicWeather'

export default {
  name: 'basic',
  components: {
    TypeSelect,
    WhenSelect,
    LocationSelect,
    BasicWeather
  }
}
</script>

<style lang="scss">
@import '../styles/line';
@import '../styles/wrapper';
</style>
