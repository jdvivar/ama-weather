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
import TypeSelect from '@/components/TypeSelect.vue'
import WhenSelect from '@/components/WhenSelect.vue'
import LocationSelect from '@/components/LocationSelect.vue'
import ProWeather from '@/components/ProWeather.vue'

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
