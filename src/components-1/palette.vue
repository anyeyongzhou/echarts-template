<!-- 调色盘的使用 -->
<!-- 1.主题调色盘，不同的主题有不同的调色盘 -->
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
  /* 2.全局调色盘，优先级高于主题调色盘 */
  color: ['red', 'green', 'blue', 'skyblue', 'purple', 'pink'],
  series: [
    {
      type: 'pie',
      data: pieData,
      /* 3.局部调色盘 */
      color: ['pink', 'yellow', 'black', 'orange', 'red', 'blue'],
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
