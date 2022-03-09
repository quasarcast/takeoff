<script setup>
import VideoPopoutMenu from './VideoPopoutMenu.vue'

const emit = defineEmits([
  'selection'
])
</script>

<template>
  <q-btn
    icon="video_library"
  >
    <q-tooltip
      anchor="top middle"
      self="bottom middle"
      transition-show="jump-up"
      transition-hide="jump-down"
    >
      Open a video window
    </q-tooltip>
    <VideoPopoutMenu
      auto-close
      @selection="payload => emit('selection', payload)"
    />
  </q-btn>
</template>
