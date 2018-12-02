<template>
  <div class="advanced">
    I'm the advanced view
    <TypeSelect />
  </div>
</template>

<script>
import TypeSelect from '@/components/TypeSelect.vue'

export default {
  name: 'advanced',
  components: {
    TypeSelect
  }
}
</script>
