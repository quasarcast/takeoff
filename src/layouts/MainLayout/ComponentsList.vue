<script setup>
import { computed, onMounted, ref } from 'vue'
import components from '../../components'
import useLeftDrawer from './useLeftDrawer'

const filter = ref('')

const visibleComponents = computed(() => {
  if (!filter.value) {
    return components
  }
  return components.filter(component => {
    return component.componentName
      .toLowerCase()
      .includes(filter.value.toLowerCase())
  })
})

const { closeLeftDrawer } = useLeftDrawer()

const filterInputComponent = ref()

defineExpose({
  focusFilterInput: () => filterInputComponent.value.focus()
})
</script>

<template>
  <q-list>
    <q-item :inset-level="1">
      <q-input
        ref="filterInputComponent"
        v-model="filter"
        dense
        outlined
        clearable
        autofocus
      >
        <template #prepend>
          <q-icon name="search" />
        </template>
      </q-input>
    </q-item>
    <q-item
      v-for="{ componentName, path } in visibleComponents"
      :key="componentName"
      :to="path"
      :inset-level="1"
      @click="closeLeftDrawer"
    >
      <q-item-section>
        {{ componentName }}
      </q-item-section>
    </q-item>
  </q-list>
</template>
