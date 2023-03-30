<!-- 样式的使用 -->
<!-- 直接样式itemStyle,textStyle,lineStyle,areaStyle,label -->
<!-- 高亮样式:在emphasis中包裹itemStyle,textStyle,lineStyle,areaStyle,label -->
<template>
  <div class="container" ref="demo"></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'

const demo = ref(null)
var mCharts = null
var pieData = [
  {
    name: '淘宝',
    value: '11231',
    itemStyle: {
      color: 'yellow'
    },
    label: {
      color: 'green'
    },
    emphasis: {
      itemStyle: {
        color: 'pink'
      }
    }
  },
  { name: '京东', value: '22673' },
  { name: '唯品会', value: '6312' },
  { name: '1号店', value: '8986' },
  { name: '聚美优品', value: '3000' }
]
var option = {
  title: {
    text: '饼图的测试',
    textStyle: {
      color: 'pink'
    }
  },
  series: [
    {
      type: 'pie',
      data: pieData,
      //文本显示
      label: {
        show: true,
        //显示数值
        formatter: function (arg) {
          return arg.name + '平台' + arg.value + '元\n' + arg.percent + '%'
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
