<template>
  <div class="line --interactive" @click="$store.commit('toggleWhen')">
    <a>{{ this.$store.state.when }}</a>
  </div>
</template>

<script>
export default {
  name: 'when-select'
}
</script>
