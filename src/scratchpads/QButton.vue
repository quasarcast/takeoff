<script setup>
import { Notify } from 'quasar'
</script>

<template>
  <div class="q-pa-lg">
    <q-btn
      label="You Can"
      @click="Notify.create({ message: 'Build Anything...', color: 'indigo' })"
    />
  </div>
</template>
