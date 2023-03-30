import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import * as echarts from 'echarts'

import themeJSON from './components-1/theme/customed.json'

//自定义主题
echarts.registerTheme('customed', themeJSON)

createApp(App).mount('#app')
