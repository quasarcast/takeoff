<script setup>
import { ref } from 'vue'
import PageVideo from 'pages/components/PageVideo.vue'
import DisplayButtonGroup from './DisplayButtonGroup.vue'

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

const splitter = ref(50)

const viewMode = ref('default')
</script>

<template>
  <q-page class="column">
    <!-- it can be split vertically -->
    <!-- it can be split horizontally -->
    <!-- it can make the video full width -->
    <!-- it can make the a set to default width -->
    <DisplayButtonGroup
      v-model="viewMode"
    />

    <div
      v-if="viewMode === 'vertical'"
      class="col flex"
    >
      <q-splitter
        v-model="splitter"
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
        v-model="splitter"
        horizontal
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

    <!-- <q-splitter v-model="splitter">
      <template #before>
        <PageVideo
          v-if="videoId"
          :video-id="videoId"
        />
      </template>
      <template #after>
        <component :is="component" />
      </template>
    </q-splitter> -->

    <!-- <q-splitter v-model="splitter">
      <template #before>
        <PageVideo
          v-if="videoId"
          :video-id="videoId"
        />
      </template>
      <template #after>
        <component :is="component" />
      </template>
    </q-splitter> -->
  </q-page>
</template>
