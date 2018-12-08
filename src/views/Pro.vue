<template>
  <div class="pro">
    <div class="wrapper">
      <TypeSelect />
      <div class="line">
        Weather
      </div>
      <div class="line">
        In
      </div>
      <LocationSelect />
    </div>
    <ProWeather />
  </div>
</template>

<script>
import TypeSelect from '@/components/TypeSelect'
import WhenSelect from '@/components/WhenSelect'
import LocationSelect from '@/components/LocationSelect'
import ProWeather from '@/components/ProWeather'

export default {
  name: 'pro',
  components: {
    TypeSelect,
    WhenSelect,
    LocationSelect,
    ProWeather
  }
}
</script>
