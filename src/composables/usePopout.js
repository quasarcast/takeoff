import { markRaw, ref } from 'vue'
import deepmerge from 'deepmerge'

const defaultOptions = {
  popout: {
    width: 800,
    height: 800 / (16 / 9),
    left: 100,
    top: 100,
    resizable: 'yes',
    scrollbars: 'yes',
    toolbar: 'yes',
    menubar: 'no',
    location: 'no',
    directories: 'no',
    status: 'yes'
  }
}

export default (locationParam, optionsParam = {}) => {
  const popoutWindow = ref(null)
  const location = ref(locationParam)
  const options = ref(deepmerge(defaultOptions, optionsParam))

  let onBeforeUnloadFunction = null

  function getPopoutOptionsString () {
    const resultArray = []
    const popoutEntries = Object.entries(options.value.popout)

    for (const [key, value] of popoutEntries) {
      resultArray.push(`${key}=${value}`)
    }

    return resultArray.join(',')
  }

  function open (dimensions = null) {
    if (dimensions) {
      options.value.popout = Object.assign({}, options.value.popout, dimensions)
    }

    popoutWindow.value = markRaw(window.open(
      location.value,
      'popUpWindow',
      getPopoutOptionsString()
    ))
    if (onBeforeUnloadFunction) {
      popoutWindow.value.onbeforeunload = onBeforeUnloadFunction
    }
  }

  function onClose (onCloseFunction) {
    onBeforeUnloadFunction = onCloseFunction
    if (popoutWindow.value) {
      popoutWindow.value.onbeforeunload = onCloseFunction
    }
  }

  function sendMessage (message) {
    popoutWindow.value.postMessage(message, location.value)
  }

  return {
    open,
    onClose,
    sendMessage,
    popoutWindow,
    location,
    options
  }
}
