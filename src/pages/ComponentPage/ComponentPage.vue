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

const verticalSplitter = ref(50)
const horizontalSplitter = ref(50)

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
      >
        <template #before>
          <div class="full-height column">
            <PageVideo
              v-if="videoId"
              :video-id="videoId"
              style="height: 100px"
            />
          </div>
        </template>
        <template #after>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate id, quo vitae ipsum dignissimos porro minus quia obcaecati, libero suscipit, quam sequi consequatur sint voluptatum? Perferendis minima adipisci possimus laboriosam.</div>
          <!-- <component :is="component" /> -->
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
          style="max-width: 65vw"
          class="full-width"
        >
          <PageVideo
            v-if="videoId"
            :video-id="videoId"
          />
        </div>
      </div>
      <component
        :is="component"
        class="col-12"
      />
    </div>
  </q-page>
</template>
