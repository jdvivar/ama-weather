<template>
  <div class="line --interactive" @click="$store.commit('toggleWhen')">
    {{ this.$store.state.when }}
  </div>
</template>

<script>
export default {
  name: 'time-select'
}
</script>
