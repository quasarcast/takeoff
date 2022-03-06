<script setup>
import { ref } from 'vue'

const props = defineProps({
  ratio: {
    required: true,
    type: Number
  },
  debounce: {
    required: false,
    type: Number,
    default: 200
  }
})

const componentWidth = ref()

function getWidthFromHeight (height) {
  return height * props.ratio
}

function onResize ({ width, height }) {
  const widthFromHeight = getWidthFromHeight(height)
  if (widthFromHeight >= (width - 1)) {
    componentWidth.value = '100%'
  } else {
    componentWidth.value = widthFromHeight + 'px'
  }
}
</script>

<template>
  <q-resize-observer
    :debounce="debounce"
    @resize="onResize"
  />
  <div
    v-bind="$attrs"
    :style="{ width: componentWidth }"
  >
    <q-responsive
      :ratio="ratio"
      style="overflow: hidden"
    >
      <slot name="default" />
    </q-responsive>
  </div>
</template>
