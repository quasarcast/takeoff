<script setup>
import FitResponsiveToParent from 'components/FitResponsiveToParent.vue'
import SourceVideo from 'components/SourceVideo/SourceVideo.vue'

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
</script>

<template>
  <div
    class="flex flex-center"
    style="height: 100vh"
  >
    <FitResponsiveToParent
      :debounce="10"
      :ratio="ratio"
    >
      <SourceVideo
        class="col"
        :ratio="ratio"
        :video-id="props.videoId"
      />
    </FitResponsiveToParent>
  </div>
</template>
