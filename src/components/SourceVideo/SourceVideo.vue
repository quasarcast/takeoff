<script setup>
import SourceVideoIframe from './SourceVideoIframe.vue'

defineProps({
  videoId: {
    required: true,
    type: [Number, String]
  },
  ratio: {
    required: false,
    type: Number,
    default: null
  }
})
</script>

<template>
  <q-responsive
    v-if="ratio !== null"
    :ratio="ratio"
  >
    <SourceVideoIframe :video-id="videoId" />
  </q-responsive>

  <SourceVideoIframe
    v-else
    :video-id="videoId"
  />
</template>
