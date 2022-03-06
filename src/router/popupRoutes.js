import { kebabCase } from 'lodash-es'
import PopupVideoVue from 'pages/components/PopupVideo.vue'
import videoIds from 'src/videoIds'
import { markRaw } from 'vue'

const modelFileContext = require.context('src/componentScratchpads', false, /\.vue$/)

const routes = []

modelFileContext.keys().forEach(modelPath => {
  const componentName = modelPath
    .replace('.vue', '')
    .replace('./', '')

  const componentPath = '/popup/components/' + kebabCase(componentName)
  const videoPath = '/popup/videos/' + kebabCase(componentName)

  routes.push({
    path: componentPath,
    component: markRaw(modelFileContext(modelPath).default)
  })

  routes.push({
    path: videoPath,
    component: markRaw(PopupVideoVue),
    props: {
      videoId: videoIds[componentName] ?? null,
      class: 'full-width'
    }
  })
})

export default routes
