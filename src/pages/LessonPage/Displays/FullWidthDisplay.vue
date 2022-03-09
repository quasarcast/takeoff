<script setup>
import FitResponsiveToParent from 'components/FitResponsiveToParent.vue'
import SourceVideo from 'components/SourceVideo/SourceVideo.vue'
defineProps({
  scratchpadComponent: {
    required: false,
    type: [Function, Object],
    default: null
  },

  videoId: {
    required: true,
    type: String
  }
})
</script>

<template>
  <div class="full-width">
    <SourceVideo
      v-if="videoId"
      :video-id="videoId"
      :ratio="16 / 9"
    />
    <component :is="scratchpadComponent" />
  </div>
</template>
