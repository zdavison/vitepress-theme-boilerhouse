import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import BoilerhouseLayout from './components/BoilerhouseLayout.vue'

import './styles/fonts.css'
import './styles/vars.css'
import './styles/base.css'
import './styles/components.css'

const theme: Theme = {
  extends: DefaultTheme,
  Layout: BoilerhouseLayout,
}

export default theme
export { markdown } from './markdown'
