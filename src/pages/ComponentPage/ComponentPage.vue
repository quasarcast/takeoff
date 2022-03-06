<script setup>
import { useLocalStorage } from '@vueuse/core'

import PageVideo from 'pages/components/PageVideo.vue'
import DisplayButtonGroup from './DisplayButtonGroup.vue'
import FitResponsiveToParent from 'components/FitResponsiveToParent.vue'
import { computed } from 'vue'

const props = defineProps({
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

const videoUrl = computed(() => {
  return 'https://www.youtube.com/embed/' + props.videoId
})

const verticalSplitter = useLocalStorage('verticalSplitter', 50)
const horizontalSplitter = useLocalStorage('horizontalSplitter', 80)

const viewMode = useLocalStorage('viewMode', 'default')
</script>

<template>
  <q-page class="column">
    <div class="row">
      <DisplayButtonGroup
        v-model="viewMode"
      />
      <q-space />
      <q-btn
        dense
        flat
        icon="videocam_off"
        @click="viewMode = 'video-off'"
      />
      <q-btn
        dense
        flat
        icon="widgets"
        @click="viewMode = 'component-off'"
      />
    </div>

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
          style="height: calc(100vh - 350px)"
          class="full-width flex flex-center"
        >
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

    <div
      v-if="viewMode === 'popout-scratchpad' || viewMode === 'component-off'"
      class="flex flex-center"
      style="height: calc(100vh - 120px)"
    >
      <FitResponsiveToParent
        :debounce="10"
        :ratio="16 / 9"
      >
        <q-video
          class="col"
          :ratio="16 / 9"
          style="height: 300px"
          :src="videoUrl"
        />
      </FitResponsiveToParent>
    </div>

    <div v-if="viewMode === 'popout-video' || viewMode === 'video-off'">
      <component
        :is="component"
      />
    </div>
  </q-page>
</template>
