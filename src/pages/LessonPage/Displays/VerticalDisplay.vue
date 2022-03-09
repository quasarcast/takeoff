<script setup>
import { useLocalStorage } from '@vueuse/core'
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

const verticalSplitter = useLocalStorage('horizontalSplitter', 80)

</script>

<template>
  <div
    class="col flex"
  >
    <q-splitter
      v-model="verticalSplitter"
      class="col"
    >
      <template #before>
        <SourceVideo
          v-if="videoId"
          :video-id="videoId"
          :ratio="16 / 9"
        />
      </template>
      <template #after>
        <component :is="scratchpadComponent" />
      </template>
    </q-splitter>
  </div>
</template>
