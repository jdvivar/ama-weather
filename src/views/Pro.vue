<template>
  <div class="pro">
    <div class="wrapper">
      <TypeSelect />
      <div class="line">
        weather
      </div>
      <div class="line">
        in
      </div>
      <LocationSelect />
    </div>
    <ProWeather />
  </div>
</template>

<script>
import TypeSelect from '@/components/TypeSelect'
import LocationSelect from '@/components/LocationSelect'
import ProWeather from '@/components/ProWeather'

export default {
  name: 'pro',
  components: {
    TypeSelect,
    LocationSelect,
    ProWeather
  }
}
</script>
