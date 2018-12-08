<template>
  <span class="loading-dots">
    <span>.</span><span>.</span><span>.</span>
  </span>
</template>

<script>
export default {
  name: 'loading-dots'
}
</script>

<style lang="scss" scoped>

.loading-dots span {
  animation-name: blink;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;

  &:nth-child(2) {
    animation-delay: .5s;
  }

  &:nth-child(3) {
    animation-delay: 1s;
  }
}

@keyframes blink {
  0% {
    opacity: .2;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: .2;
  }
}

</style>
