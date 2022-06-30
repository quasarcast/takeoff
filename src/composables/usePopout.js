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

  const onCloseFunctions = ref([])

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

    const wind = window.open(
      location.value,
      'popUpWindow',
      getPopoutOptionsString()
    )

    wind.onpagehide = (event) => {
      setTimeout(() => {
        if (event.path[0] === null) {
          onCloseFunctions.value.forEach(fn => fn())
        }
      }, 200)
    }
  }

  function onClose (onCloseFunction) {
    onCloseFunctions.value.push(onCloseFunction)
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
