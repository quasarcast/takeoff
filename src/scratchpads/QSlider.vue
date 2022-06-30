<script setup>
import { ref } from 'vue'

const height = ref(150)
</script>

<template>
  <div class="q-pa-lg">
    <q-slider
      v-model="height"
      :min="0"
      :max="500"
      label
    />
  </div>
</template>
