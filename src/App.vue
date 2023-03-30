<!-- 自适应：浏览器大小变化，图标适配 -->
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
      //label图形上的文本标签
      label: {
        //是否显示
        show: true,
        //倾斜角度
        rotate: 60,
        //文本显示位置，top left right bottom ...
        position: 'inside'
      },
      //柱宽度
      barWidth: '30%',
      data: yDataArr1
    }
  ]
}
onMounted(() => {
  mCharts = echarts.init(demo.value, null, {
    width: 600,
    height: 400
  })
  mCharts.setOption(option)
})
//监听窗口大小的变化
window.addEventListener('resize', (e) => {
  //console.log(e.target.innerWidth)
  //demo.value.style.width = e.target.innerWidth
  demo.value.style = 'width:200px;height:100%;display: flex;'
  //mCharts.resize()
})
</script>

<style lang="less" scoped>
.container {
  border: 1px solid red;
}
</style>
