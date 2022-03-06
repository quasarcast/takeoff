<script setup>
import { computed } from 'vue'
import FitResponsiveToParent from 'components/FitResponsiveToParent.vue'

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
  <div
    class="flex flex-center"
    style="height: 100vh"
  >
    <FitResponsiveToParent
      :debounce="10"
      :ratio="ratio"
    >
      <q-video
        class="col"
        :ratio="ratio"
        style="height: 300px"
        :src="videoUrl"
      />
    </FitResponsiveToParent>
  </div>
</template>
