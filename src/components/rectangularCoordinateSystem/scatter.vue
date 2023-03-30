<!-- 折线图 -->
<template>
  <div class="container" ref="demo"></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'

const demo = ref(null)
var mCharts = null
//二维数组
var dataArr = [
  { gender: 'female', height: 161.2, weight: 59 },
  { gender: 'female', height: 171.2, weight: 55 },
  { gender: 'female', height: 181.2, weight: 76 },
  { gender: 'female', height: 155.2, weight: 79 },
  { gender: 'female', height: 134.2, weight: 111 },
  { gender: 'female', height: 187.2, weight: 123 },
  { gender: 'female', height: 122.2, weight: 87 },
  { gender: 'female', height: 145.2, weight: 98 },
  { gender: 'female', height: 156.2, weight: 66 },
  { gender: 'female', height: 177.2, weight: 69 }
]
//供x,y轴使用
var axisData = []
for (var i = 0; i < dataArr.length; i++) {
  var height = dataArr[i].height
  var weight = dataArr[i].weight
  var newArr = [height, weight]
  axisData.push(newArr)
}
var option = {
  xAxis: {
    type: 'value',
    scale: true
  },
  yAxis: {
    type: 'value',
    scale: true
  },
  series: [
    {
      //涟漪图效果
      type: 'effectScatter',
      //涟漪动画产生的时机 render默认触发  emphasis鼠标滑过触发
      showEffectOn: 'emphasis',
      //涟漪图影响的范围
      rippleEffect: {
        scale: 10
      },

      //type: 'scatter',
      data: axisData,
      //散点气泡大小,可以是固定值，也可以是方法
      symbolSize: function (arg) {
        var height = arg[0] / 100
        var weight = arg[1]
        var bmi = weight / (height * height)
        if (bmi > 28) {
          return 20
        }
        return 5
      },
      //散点颜色
      itemStyle: {
        color: function (arg) {
          var height = arg.data[0] / 100
          var weight = arg.data[1]
          var bmi = weight / (height * height)
          if (bmi > 28) {
            return 'red'
          }
          return 'green'
        }
      }
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
