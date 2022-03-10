import { kebabCase } from 'lodash-es'
import { markRaw } from 'vue'
import videoIds from './videoIds'

const modelFileContext = require.context('src/scratchpads', false, /\.vue$/)
const routes = modelFileContext.keys().map(modelPath => {
  const componentName = modelPath
    .replace('.vue', '')
    .replace('./', '')

  const path = kebabCase(componentName)

  return {
    path,
    componentName,
    component: () => import('pages/LessonPage/LessonPage.vue'),
    props: {
      scratchpadComponent: markRaw(modelFileContext(modelPath).default),
      videoSlug: path,
      videoId: videoIds[componentName] ?? null
    }
  }
})

export default routes
