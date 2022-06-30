<script setup>
import { computed } from 'vue'

const props = defineProps({
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

const src = computed(() => {
  /**
   * until all videos exist on source, this workaround
   * ensures YouTube videos also work
   */
  if (props.videoId.includes('youtube')) {
    return props.videoId
  }

  return `https://${props.namespace}.sourcesync.io/${props.videoId}`
})
</script>

<template>
  <iframe
    :src="src"
    allow="autoplay"
    style="border: 0"
  />
</template>
