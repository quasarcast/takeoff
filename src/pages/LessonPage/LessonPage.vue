<script setup>
import { useLocalStorage } from '@vueuse/core'

import DisplayButtonGroup from './DisplayButtonGroup.vue'

import useOpenVideoPopout from 'src/composables/useOpenVideoPopout'
import StandardDisplay from './Displays/StandardDisplay.vue'
import HorizontalDisplay from './Displays/HorizontalDisplay.vue'
import VerticalDisplay from './Displays/VerticalDisplay.vue'
import FullWidthDisplay from './Displays/FullWidthDisplay.vue'
import VideoOnlyDisplay from './Displays/VideoOnlyDisplay.vue'
import ComponentOnlyDisplay from './Displays/ComponentOnlyDisplay.vue'
import useOpenComponentPopout from 'src/composables/useOpenComponentPopout'

const props = defineProps({
  scratchpadComponent: {
    required: true,
    type: [Object, Function]
  },

  videoSlug: {
    required: false,
    type: String,
    default: null
  },

  videoId: {
    required: false,
    type: String,
    default: null
  }
})

const viewMode = useLocalStorage('viewMode', 'standard')

const videoPopouter = useOpenVideoPopout(props.videoSlug)
const componentPopouter = useOpenComponentPopout(props.videoSlug)

videoPopouter.onClose(() => (viewMode.value = 'standard'))
componentPopouter.onClose(() => (viewMode.value = 'standard'))
</script>

<template>
  <q-page class="column">
    <div class="row">
      <DisplayButtonGroup
        v-model="viewMode"
        @open-video-popout="videoPopouter.open"
        @open-scratchpad-popout="componentPopouter.open"
      />
      <q-space />
      <q-btn
        dense
        flat
        icon="videocam_off"
        @click="viewMode = 'video-off'"
      />
      <q-btn
        dense
        flat
        icon="widgets"
        @click="viewMode = 'component-off'"
      />
    </div>

    <VerticalDisplay
      v-if="viewMode === 'vertical'"
      :video-id="videoId"
      :scratchpad-component="scratchpadComponent"
    />

    <StandardDisplay
      v-if="viewMode === 'standard'"
      :video-id="videoId"
      :scratchpad-component="scratchpadComponent"
    />

    <HorizontalDisplay
      v-if="viewMode === 'horizontal'"
      :video-id="videoId"
      :scratchpad-component="scratchpadComponent"
    />

    <FullWidthDisplay
      v-if="viewMode === 'full-width'"
      :video-id="videoId"
      :scratchpad-component="scratchpadComponent"
    />

    <VideoOnlyDisplay
      v-if="viewMode === 'popout-scratchpad' || viewMode === 'component-off'"
      :video-id="videoId"
    />

    <ComponentOnlyDisplay
      v-if="viewMode === 'popout-video' || viewMode === 'video-off'"
      :scratchpad-component="scratchpadComponent"
    />
  </q-page>
</template>
