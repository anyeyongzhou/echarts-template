<!-- 折线图 -->
<template>
  <div class="container" ref="demo"></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'

const demo = ref(null)
var mCharts = null
var xDataArr = [
  '1月',
  '2月',
  '3月',
  '4月',
  '5月',
  '6月',
  '7月',
  '8月',
  '9月',
  '10月',
  '11月',
  '12月'
]
var yDataArr1 = [
  3000, 2800, 900, 1500, 900, 860, 630, 450, 1800, 5000, 500, 450
]
var yDataArr2 = [2000, 3800, 500, 500, 860, 960, 1630, 1450, 2800, 500, 200, 50]
var option = {
  xAxis: {
    type: 'category',
    data: xDataArr,
    //紧挨边缘   折线从y轴开始
    boundaryGap: false
  },
  yAxis: {
    type: 'value',
    //缩放 可以控制y轴不从0刻度开始
    scale: true
  },
  series: [
    {
      name: '康师傅全年销量',
      type: 'line',
      markPoint: {
        data: [
          {
            type: 'max'
          },
          {
            type: 'min'
          }
        ]
      },
      markLine: {
        data: [
          {
            type: 'average'
          }
        ]
      },
      //标注区间
      markArea: {
        data: [
          [
            {
              xAxis: '1月'
            },
            {
              xAxis: '2月'
            }
          ],
          [
            {
              xAxis: '6月'
            },
            {
              xAxis: '8月'
            }
          ]
        ]
      },
      //平滑效果开启
      smooth: true,
      //线的样式
      lineStyle: {
        //颜色
        color: 'blue',
        //类别  dotted点线 solid实线  dashed虚线
        type: 'dashed'
      },
      //填充风格
      areaStyle: {
        color: 'pink'
      },
      data: yDataArr1,
      //堆叠图，第二个图形是堆叠到第一个图形之上的，就是第二个图形y轴的数据是yDataArr1+yDataArr2，而不是只显示yDataArr2
      //要求stack:'all'里面的名称相同
      stack: 'all'
    },
    {
      name: '统一全年销量',
      type: 'line',
      data: yDataArr2,
      stack: 'all'
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
