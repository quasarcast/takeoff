<script setup>
import { computed } from 'vue'

const props = defineProps({
  videoId: {
    required: false,
    type: String,
    default: ''
  },
  ratio: {
    required: false,
    type: Number,
    default: 16 / 9
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
    :ratio="ratio"
    style="height: 300px"
    :src="videoUrl"
  />
</template>
