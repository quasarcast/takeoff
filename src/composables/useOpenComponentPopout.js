import usePopout from 'src/composables/usePopout'
import { computed, ref } from 'vue'

export default (
  componentNameParam = '',
  optionsParam = {}
) => {
  const componentName = ref(componentNameParam)

  const popoutUrl = computed(() => {
    return window.location.origin + '/popout/components/' + componentName.value
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
    options,
    componentName
  }
}
