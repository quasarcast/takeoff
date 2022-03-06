import { createGlobalState } from '@vueuse/core'
import { ref } from 'vue'

export default createGlobalState(() => {
  const leftDrawerOpen = ref(true)
  function toggleLeftDrawer () {
    leftDrawerOpen.value = !leftDrawerOpen.value
  }
  function closeLeftDrawer () {
    leftDrawerOpen.value = false
  }

  return {
    leftDrawerOpen,
    toggleLeftDrawer,
    closeLeftDrawer
  }
})
