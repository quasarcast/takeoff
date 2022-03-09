<script setup>
import { useVModel } from '@vueuse/core'
import VideoPopoutButton from './VideoPopoutButton/VideoPopoutButton.vue'

const props = defineProps({
  modelValue: {
    required: true,
    type: String
  }
})

const emit = defineEmits([
  'update:modelValue',
  'open-video-popout',
  'open-scratchpad-popout'
])

const selection = useVModel(props, 'modelValue', emit)

function openVideoPopout (dimensions) {
  selection.value = 'popout-video'
  emit('open-video-popout', dimensions)
}

function openScratchpadPopout () {
  selection.value = 'popout-scratchpad'
  emit('open-scratchpad-popout')
}

const displayModesConfig = {
  standard: {
    icon: 'close_fullscreen',
    tooltip: 'Standard (default)'
  },
  horizontal: {
    tooltip: 'Horizontal',
    icon: 'view_agenda'
  },
  vertical: {
    tooltip: 'Vertical',
    icon: 'view_agenda',
    iconClass: 'rotate-90'
  },
  'full-width': {
    tooltip: 'Full Width',
    icon: 'open_in_full'
  }
  // 'popout-scratchpad': {
  //   icon: 'filter_none',
  //   tooltip: 'Popout the scratchpad'
  // },
  // 'popout-video': {
  //   tooltip: 'Popout the video',
  //   icon: 'video_library'
  // }
}
</script>

<template>
  <q-btn-group flat>
    <q-btn
      v-for="[key, value] in Object.entries(displayModesConfig)"
      :key="key"
      :flat="selection !== key"
      :unelevated="selection === key"
      color="grey-7"
      @click="selection = key"
    >
      <q-tooltip>{{ value.tooltip }}</q-tooltip>
      <q-icon
        :name="value.icon"
        :class="value.iconClass"
      />
    </q-btn>

    <!-- Video Popout Button -->
    <VideoPopoutButton
      :flat="selection !== 'popout-video'"
      :unelevated="selection === 'popout-video'"
      color="grey-7"
      @selection="dimensions => openVideoPopout(dimensions)"
    />

    <q-btn
      :flat="selection !== 'popout-scratchpad'"
      :unelevated="selection === 'popout-scratchpad'"
      color="grey-7"
      icon="filter_none"
      @click="openScratchpadPopout(dimensions)"
    />
  </q-btn-group>
</template>
