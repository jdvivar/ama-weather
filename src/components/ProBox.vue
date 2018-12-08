<template>
  <div class="ProBox">
    <h3 v-if="title" class="title">{{ title }}</h3>
    <div v-if="image">
      <h1 v-if="showLoadingDots"><LoadingDots /></h1>
      <img :src="image" @load="showLoadingDots = false"/>
    </div>
    <div v-else class="well">
      <ul>
        <li v-for="(value, key) in data" :key="key">
          <div v-if="key === 'link'">
            <b>{{ key }}:</b>&nbsp;<a :href="value" target="_blank">See this
              info at Yahoo! Weather</a>
          </div>
          <div v-else>
            <div v-if="key !== 'code'">
              <b>{{key}}:</b> {{ value }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import LoadingDots from '@/components/LoadingDots'

export default {
  name: 'pro-box',
  data: function () {
    return {
      showLoadingDots: true
    }
  },
  components: {
    LoadingDots
  },
  props: {
    title: String,
    image: String,
    data: Object
  },
  methods: {
    handleLoad: function () {

    }
  }
}
</script>

<style lang="scss" scoped>
  .title {
    text-transform: capitalize;
  }

  .well {
    padding: 20px;
    background-color: rgba(black,.05);
    line-height: 1.42;
    font-family: monospace;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  img {
    height: 80px;
  }
</style>
