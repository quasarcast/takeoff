<script setup>
defineProps({
  scratchpadComponent: {
    required: false,
    type: [Function, Object],
    default: null
  }
})
</script>

<template>
  <component :is="scratchpadComponent" />
</template>
