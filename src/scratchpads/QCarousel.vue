<script setup>
import { ref } from 'vue'

const lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'

const slide = ref('style')
</script>

<template>
  <div class="q-pa-lg">
    <q-carousel
      v-model="slide"
      navigation
      height="230px"
      style="width: 450px"
      class="bg-lime-4"
    >
      <q-carousel-slide
        name="style"
        class="column no-wrap flex-center"
      >
        <q-icon
          name="style"
          size="56px"
        />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="tv"
        class="column no-wrap flex-center"
      >
        <q-icon
          name="live_tv"
          size="56px"
        />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="layers"
        class="column no-wrap flex-center"
      >
        <q-icon
          name="layers"
          size="56px"
        />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>
