<script setup>
import axios from 'axios'

function getTodos () {
  return axios.get('https://todo-api.quasarcast.com/todos')
}
</script>

<template>
  <div class="q-pa-lg">
    <q-ajax-bar />

    <q-btn
      label="get todos"
      @click="getTodos"
    />
  </div>
</template>
