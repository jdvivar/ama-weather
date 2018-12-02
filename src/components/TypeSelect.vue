<template>
  <div class="line --interactive">
    <router-link to="/">Pro</router-link>
    <router-link to="/pro">Basic</router-link>
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
