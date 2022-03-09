import { set } from 'lodash-es'
import usePopout from 'src/composables/usePopout'
import { computed, ref } from 'vue'

export default (
  videoIdParam = '',
  optionsParam = {}
) => {
  const videoId = ref(videoIdParam)

  const popoutUrl = computed(() => {
    return window.location.origin + '/popout/videos/' + videoId.value
  })

  const {
    open,
    onClose,
    sendMessage,
    popoutWindow,
    location,
    options
  } = usePopout(popoutUrl.value, optionsParam)

  return {
    open,
    onClose,
    sendMessage,
    popoutWindow,
    location,
    options
  }
}
