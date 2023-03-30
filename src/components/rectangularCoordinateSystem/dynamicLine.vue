<!-- 动态折线图 -->
<script setup>
import * as echarts from 'echarts'
import { ref, onMounted, reactive, watch } from 'vue'

var myChart
const demo = ref(null)
let data = []
var now = new Date(2020, 3, 1)
var oneDay = 24 * 3600 * 1000
var value = Math.random() * 1000
for (var i = 0; i < 20; i++) {
  now = new Date(now.getTime() + oneDay)
  value = value + Math.random() * 21
  data.push({
    name: now.toString(),
    value: [
      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
      Math.round(value)
    ]
  })
}
const option = reactive({
  title: {
    text: '动态折线图'
  },
  tooltip: {
    trigger: 'axis',
    formatter: function (parms) {
      data = parms[0].data.value
      const x = data[0]
      const y = data[1]
      return `时间：${x} 股票价格${y}`
    },
    axisPointer: {
      animation: false
    }
  },
  xAxis: {
    type: 'time',
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    splitLine: {
      show: false
    },
    //坐标轴两边留白策略
    boundaryGap: [0, '100%']
  },
  series: [
    {
      name: '股票数据',
      type: 'line',
      data: data
    }
  ]
})

setInterval(() => {
  data.shift()
  now = new Date(now.getTime() + oneDay)
  value = value + Math.random() * 21
  data.push({
    name: now.toString(),
    value: [
      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
      Math.round(value)
    ]
  })
  // var myChart = echarts.init(demo.value)
  myChart.setOption({
    series: [{ data }]
  })
}, 1000)

onMounted(() => {
  myChart = echarts.init(demo.value)
  myChart.setOption(option)
})
</script>

<template>
  <div id="app">
    <div style="width: 1000px; height: 800px; margin: 0 auto" ref="demo"></div>
  </div>
</template>

<style scoped></style>
