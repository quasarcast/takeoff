<script setup>
import { computed } from 'vue'

const props = defineProps({
  videoId: {
    required: false,
    type: String,
    default: ''
  }
})

const videoUrl = computed(() => {
  if (props.videoId) {
    return 'https://www.youtube.com/embed/' + props.videoId
  }
  return ''
})
</script>

<template>
  <q-video
    class="col"
    :ratio="16/9"
    :src="videoUrl"
  />
</template>
