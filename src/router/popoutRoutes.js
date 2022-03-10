import { kebabCase } from 'lodash-es'
import PopoutVideoPageVue from 'pages/PopoutVideoPage.vue'
import videoIds from 'src/videoIds'
import { markRaw } from 'vue'

const modelFileContext = require.context('src/scratchpads', false, /\.vue$/)

const routes = []

modelFileContext.keys().forEach(modelPath => {
  const componentName = modelPath
    .replace('.vue', '')
    .replace('./', '')

  const componentPath = '/popout/components/' + kebabCase(componentName)
  const videoPath = '/popout/videos/' + kebabCase(componentName)

  routes.push({
    path: componentPath,
    component: markRaw(modelFileContext(modelPath).default)
  })

  routes.push({
    path: videoPath,
    component: markRaw(PopoutVideoPageVue),
    props: {
      videoId: videoIds[componentName] ?? null,
      class: 'full-width'
    }
  })
})

export default routes
