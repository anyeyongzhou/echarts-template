引入自定义样式
  1.在main.js中
    import * as echarts from 'echarts'
    import themeJSON from './components-1/theme/customed.json'
    echarts.registerTheme('customed', themeJSON)
  2.vue文件中直接使用
    mCharts = echarts.init(demo.value, 'customed')