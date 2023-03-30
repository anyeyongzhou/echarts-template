<template>
  <div class="container" ref="demo"></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'

const demo = ref(null)
var mCharts = null
var dataMax = [
  { name: '易用性', max: 100 },
  { name: '功能', max: 100 },
  { name: '拍照', max: 100 },
  { name: '跑分', max: 100 },
  { name: '续航', max: 100 }
]
var dataStr = [
  { name: '华为手机', value: [80, 90, 80, 82, 90] },
  { name: '中兴手机', value: [70, 82, 75, 70, 77] }
]
var option = {
  radar: {
    indicator: dataMax,
    //雷达底座的类型 默认是polygon
    shape: 'circle'
  },
  series: [
    {
      type: 'radar',
      data: dataStr,
      label: {
        //显示数字
        show: true
      },
      //将每一个雷达图形成一个阴影的区域
      areaStyle: {}
    }
  ]
}
onMounted(() => {
  mCharts = echarts.init(demo.value)
  mCharts.setOption(option)
})
</script>

<style lang="less" scoped>
.container {
  width: 800px;
  height: 600px;
}
</style>
