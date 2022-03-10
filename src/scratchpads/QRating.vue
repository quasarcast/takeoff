<script setup>
import { ref } from 'vue'

const rating = ref(3)
</script>

<template>
  <div class="q-pa-lg">
    <q-rating
      v-model="rating"
      size="lg"
      color="blue"
    />
  </div>
</template>
