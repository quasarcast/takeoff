<script setup>
const emit = defineEmits([
  'selection'
])

const resolutions = [
  { width: 1920, height: 1080, subLabel: 'lg' },
  { width: 1600, height: 900, subLabel: 'md' },
  { width: 1024, height: 576, subLabel: 'sm' }
]
</script>

<template>
  <q-menu>
    <q-list>
      <q-item
        v-for="{ width, height, subLabel } in resolutions"
        :key="subLabel"
        clickable
        @click="emit('selection', { width, height })"
      >
        <q-item-section>
          {{ width }} x {{ height }} ({{ subLabel }})
        </q-item-section>
      </q-item>
    </q-list>
  </q-menu>
</template>
