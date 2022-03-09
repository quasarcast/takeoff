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
  <div class="flex flex-center">
    <div
      style="height: calc(100vh - 350px)"
      class="full-width flex flex-center"
    >
      <FitResponsiveToParent
        :ratio="16 / 9"
        :debounce="10"
      >
        <SourceVideo
          v-if="videoId"
          :video-id="videoId"
        />
      </FitResponsiveToParent>
    </div>
  </div>
  <q-separator
    class="q-mt-xl"
    spaced
  />
  <component
    :is="scratchpadComponent"
    class="col-12"
  />
</template>
