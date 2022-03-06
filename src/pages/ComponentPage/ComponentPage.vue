<script setup>
import { useLocalStorage } from '@vueuse/core'

import PageVideo from 'pages/components/PageVideo.vue'
import DisplayButtonGroup from './DisplayButtonGroup.vue'
import FitResponsiveToParent from 'components/FitResponsiveToParent.vue'

defineProps({
  component: {
    required: true,
    type: [Object, Function]
  },

  videoId: {
    required: false,
    type: String,
    default: null
  }
})

const verticalSplitter = useLocalStorage('verticalSplitter', 50)
const horizontalSplitter = useLocalStorage('horizontalSplitter', 80)

const viewMode = useLocalStorage('viewMode', 'default')
</script>

<template>
  <q-page class="column">
    <DisplayButtonGroup
      v-model="viewMode"
    />

    <div
      v-if="viewMode === 'vertical'"
      class="col flex"
    >
      <q-splitter
        v-model="verticalSplitter"
        class="col"
      >
        <template #before>
          <PageVideo
            v-if="videoId"
            :video-id="videoId"
          />
        </template>
        <template #after>
          <component :is="component" />
        </template>
      </q-splitter>
    </div>

    <div
      v-if="viewMode === 'horizontal'"
      class="col column"
    >
      <q-splitter
        v-model="horizontalSplitter"
        horizontal
        style="height: calc(100vh - 87px)"
        before-class="q-pa-md"
      >
        <template #before>
          <div class="row flex-center full-height">
            <FitResponsiveToParent
              :ratio="16 / 9"
              :debounce="10"
            >
              <PageVideo
                v-if="videoId"
                :video-id="videoId"
              />
            </FitResponsiveToParent>
          </div>
        </template>
        <template #after>
          <component :is="component" />
        </template>
      </q-splitter>
    </div>

    <div v-if="viewMode === 'full-width'">
      <PageVideo
        v-if="videoId"
        :video-id="videoId"
      />
      <component :is="component" />
    </div>

    <div
      v-if="viewMode === 'default'"
    >
      <div class="flex flex-center">
        <div
          style="max-width: 63vw"
          class="full-width"
        >
          <PageVideo
            v-if="videoId"
            :video-id="videoId"
          />
        </div>
      </div>
      <q-separator
        class="q-mt-xl"
        spaced
      />
      <component
        :is="component"
        class="col-12"
      />
    </div>
  </q-page>
</template>
