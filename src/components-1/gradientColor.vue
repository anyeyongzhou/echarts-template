<!-- 颜色渐变的使用 -->
<template>
  <div class="container" ref="demo"></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'

const demo = ref(null)
var mCharts = null
var xDataArr = ['张三', '李四', '王五', '运土', '小米', '茅台', '大猫', '小二']
var yDataArr1 = [88, 92, 63, 77, 98, 88, 65, 48]
var yDataArr2 = [99, 66, 55, 88, 99, 77, 22, 66]
/* 将xAxis，yAxis里面的参数互换就能形成横向柱状图 */
var option = {
  xAxis: {
    type: 'category',
    data: xDataArr
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '语文',
      type: 'bar',
      //markPoint最大值最小值
      markPoint: {
        data: [
          {
            type: 'max',
            name: '最大值'
          },
          {
            type: 'min',
            name: '最小值'
          }
        ]
      },
      //markLine平均值
      markLine: {
        data: [
          {
            type: 'average',
            name: '平均值'
          }
        ]
      },
      itemStyle: {
        color: {
          /* type: 'liner', //线性渐变
          x: 0,
          y: 0,
          x2: 0,
          y2: 1, */

          type: 'radial', //径向渐变
          x: 0.5,
          y: 0.5,
          r: 0.5,
          colorStops: [
            {
              offset: 0,
              color: 'red' //0%处的颜色
            },
            {
              offset: 1,
              color: 'blue' //0%处的颜色
            }
          ]
        }
      },
      data: yDataArr1
    }
  ]
}
onMounted(() => {
  //主题可以是light、dark
  //还可以定制主题
  mCharts = echarts.init(demo.value, 'customed')
  mCharts.setOption(option)
})
</script>

<style lang="less" scoped>
.container {
  width: 800px;
  height: 600px;
}
</style>
