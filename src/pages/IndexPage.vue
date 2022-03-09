<template>
  <q-page class="flex flex-center">
    <iframe
      src="https://experience.sourcesync.io/784"
      allow="autoplay"
      frameborder="0"
    />
  </q-page>
</template>

<script>
import { defineComponent, onBeforeMount, ref } from 'vue'

export default defineComponent({
  name: 'PageIndex'
})
console.log('sdff')
onBeforeMount(() => {
  console.log('here')
  const player = new playerjs.Player(window.frames.myFrame)

  console.log('player', player)
})
</script>
