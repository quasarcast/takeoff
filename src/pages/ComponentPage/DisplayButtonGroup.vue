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
  </q-btn-group>
</template>
