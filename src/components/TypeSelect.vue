<template>
  <div class="line">
    <router-link to="/">Advanced</router-link>
    <router-link to="/advanced">Basic</router-link>
  </div>
</template>
<script>
export default {
  name: 'type-select'
}
</script>

<style lang='scss' scoped>
@import '../styles/variables';

.line {
  color: $line-color-interactive;
}

.router-link-exact-active {
  display: none;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
