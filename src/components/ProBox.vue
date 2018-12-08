<template>
  <div class="ProBox">
    <h3 v-if="title" class="title">{{ title }}</h3>
    <div v-if="image">
      <img :src="image" />
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
export default {
  name: 'pro-box',
  props: {
    title: String,
    image: String,
    data: Object
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
