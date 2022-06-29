<script setup>
import { ref } from 'vue'

const showDialog = ref(false)
</script>

<template>
  <div class="q-pa-lg">
    <q-btn
      label="Guess What?"
      @click="showDialog = true"
    />

    <q-dialog v-model="showDialog">
      <q-card>
        <q-card-section>
          You can build anything...
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>
