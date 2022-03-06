<script setup>
import { useVModel } from '@vueuse/core'

const props = defineProps({
  modelValue: {
    required: true,
    type: String
  }
})

const emit = defineEmits(['update:modelValue'])

const selection = useVModel(props, 'modelValue', emit)

function onButtonClicked (view) {
  selection.value = view
  if (view === 'popout-video') {
    createVideoPopoutWindow()
  }
  if (view === 'popout-scratchpad') {
    createScratchpadPopoutWindow()
  }
}

function createVideoPopoutWindow () {
  const url = window.location.origin + '/popup/videos/q-banner'

  const popupWindow = window.open(
    url,
    'popUpWindow',
    'width=800,height=600,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes'
  )

  popupWindow.onbeforeunload = () => {
    selection.value = 'default'
  }
}

function createScratchpadPopoutWindow () {
  const url = window.location.origin + '/popup/components/q-banner'

  const popupWindow = window.open(
    url,
    'popUpWindow',
    'width=800,height=600,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes'
  )

  popupWindow.onbeforeunload = () => {
    selection.value = 'default'
  }
}
</script>

<template>
  <q-btn-group flat>
    <q-btn
      :flat="selection !== 'horizontal'"
      :unelevated="selection === 'horizontal'"
      color="grey-7"
      icon="view_agenda"
      @click="onButtonClicked('horizontal')"
    />
    <q-btn
      :flat="selection !== 'vertical'"
      :unelevated="selection === 'vertical'"
      color="grey-7"
      @click="onButtonClicked('vertical')"
    >
      <q-icon
        name="view_agenda"
        class="rotate-90"
      />
    </q-btn>
    <q-btn
      :flat="selection !== 'full-width'"
      :unelevated="selection === 'full-width'"
      color="grey-7"
      icon="open_in_full"
      @click="onButtonClicked('full-width')"
    />
    <q-btn
      :flat="selection !== 'default'"
      :unelevated="selection === 'default'"
      color="grey-7"
      icon="close_fullscreen"
      @click="onButtonClicked('default')"
    />
    <q-btn
      :flat="selection !== 'popout-scratchpad'"
      :unelevated="selection === 'popout-scratchpad'"
      color="grey-7"
      icon="filter_none"
      @click="onButtonClicked('popout-scratchpad')"
    />
    <q-btn
      :flat="selection !== 'popout-video'"
      :unelevated="selection === 'popout-video'"
      color="grey-7"
      icon="video_library"
      @click="onButtonClicked('popout-video')"
    />
  </q-btn-group>
</template>
