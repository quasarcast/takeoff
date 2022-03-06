<script setup>
//
</script>

<template>
  <div
    class="column flex-center"
    style="height: 100vh"
  >
    <q-card
      style="max-width: 400px"
      class="col full-width"
    >
      <q-card-section>
        <q-chat-message label="5 minutes ago" />
        <q-chat-message :text="['Hey! How ya doin?']" />
      </q-card-section>
    </q-card>
  </div>
</template>
