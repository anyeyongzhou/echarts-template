<!-- 饼图 -->
<template>
  <div class="container" ref="demo"></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'

const demo = ref(null)
var mCharts = null
var pieData = [
  { name: '淘宝', value: '11231' },
  { name: '京东', value: '22673' },
  { name: '唯品会', value: '6312' },
  { name: '1号店', value: '8986' },
  { name: '聚美优品', value: '3000' }
]
var option = {
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
      },
      //饼图大小 可固定值，可百分比，还可以是个数组，实现圆环效果
      //radius:20
      //radius:'20%'
      radius: ['50%', '75%'],
      //南丁格尔图
      roseType: 'radius',
      //选中效果 single  multiple
      selectedMode: 'multiple',
      //选中偏移距离
      selectedOffset: 30
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
