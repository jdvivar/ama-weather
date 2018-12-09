<template>
  <div id="type-select" class="line --interactive">
    <router-link to="/">pro</router-link>
    <router-link to="/pro">basic</router-link>
  </div>
</template>
<script>
export default {
  name: 'type-select'
}
</script>

<style scoped>
.router-link-exact-active {
  display: none;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
