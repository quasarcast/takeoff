<script setup>
import { ref } from 'vue'
import ComponentsList from './ComponentsList.vue'
import useLeftDrawer from './useLeftDrawer'

const { leftDrawerOpen, toggleLeftDrawer } = useLeftDrawer()

const componentListComponent = ref()
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header>
          Menu
        </q-item-label>

        <q-expansion-item
          :duration="150"
          label="Components"
          icon="widgets"
          @after-show="componentListComponent.focusFilterInput()"
        >
          <ComponentsList ref="componentListComponent" />
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
