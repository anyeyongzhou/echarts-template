<template>
  <div class="container" ref="demo"></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'

const demo = ref(null)
var mCharts = null
var option = {
  series: [
    {
      type: 'gauge',
      //data的每一个对象就是一个指针
      data: [
        {
          value: 97,
          //指针样式配置
          itemStyle: {
            color: 'pink'
          }
        },
        {
          value: 85,
          itemStyle: {
            color: 'green'
          }
        }
      ],
      //min.max控制数值范围
      min: 50,
      max: 98
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
