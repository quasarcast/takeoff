<script setup>
defineProps({
  videoId: {
    required: true,
    type: [Number, String]
  },
  namespace: {
    required: false,
    type: String,
    default: 'experience'
  }
})
</script>

<template>
  <iframe
    :src="`https://${namespace}.sourcesync.io/${videoId}`"
    allow="autoplay"
    style="border: 0"
  />
</template>
