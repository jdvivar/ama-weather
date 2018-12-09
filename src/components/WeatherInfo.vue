<template>
  <div>
    <div v-if="readyToShow" class="WeatherInfo">

      <h1>Current conditions</h1>
      <ProBox :data="destructureConditions(weatherData.item)"/>

      <h1>Forecast</h1>
      <div v-for="(day, index) in weatherData.item.forecast" :key="index">
        <ProBox :data="day"/>
      </div>

      <h1>Miscellanea</h1>
      <ProBox title="image" :image="getImgSrc(weatherData.item.description)"/>
      <ProBox title="astronomy" :data="weatherData.astronomy"/>
      <ProBox title="atmosphere" :data="weatherData.atmosphere"/>
      <ProBox title="wind" :data="weatherData.wind"/>
      <ProBox title="location" :data="weatherData.location"/>
      <ProBox title="other" :data="destructureOther(weatherData)"/>
      <ProBox title="units" :data="weatherData.units"/>

    </div>
    <h1 v-else><LoadingDots /></h1>
  </div>
</template>

<script>
import ProBox from '@/components/ProBox'
import LoadingDots from '@/components/LoadingDots'

// Get everything after *
// This is needed because the API returns malformed URLs
const getLink = link => /(?<=\*).*/.exec(link)[0]

// Get img src value
// This is needed because an image is supplied as part of markup
const getImgSrc = markup => /(?<=img src=")[^"]*/.exec(markup)[0]

export default {
  name: 'weather-info',
  components: {
    ProBox,
    LoadingDots
  },
  data: function () {
    return {
      readyToShow: false
    }
  },
  props: {
    weatherData: {
      type: Object,
      required: true
    }
  },
  methods: {
    destructureConditions: function ({ lat, long, title, condition }) {
      return { lat, long, title, ...condition }
    },
    destructureOther: function ({ title, ttl, link, lastBuildDate, language }) {
      return { title, ttl, link: getLink(link), lastBuildDate, language }
    },
    getImgSrc
  },
  watch: {
    weatherData: function (newData) {
      // Without this, the component initially renders with an empty object
      // (because it's not a 1st level change)
      this.readyToShow = !!newData.item
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.WeatherInfo {
  color: black;
  margin: 20px auto;
  max-width: $app-width;
}
</style>
