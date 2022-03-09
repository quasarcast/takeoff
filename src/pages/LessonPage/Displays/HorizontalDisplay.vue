<script setup>
import { useLocalStorage } from '@vueuse/core'
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

const horizontalSplitter = useLocalStorage('horizontalSplitter', 80)

</script>

<template>
  <div class="col column">
    <q-splitter
      v-model="horizontalSplitter"
      horizontal
      style="height: calc(100vh - 87px)"
      before-class="q-pa-md"
    >
      <template #before>
        <div class="row flex-center full-height">
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
      </template>
      <template #after>
        <component :is="scratchpadComponent" />
      </template>
    </q-splitter>
  </div>
</template>
