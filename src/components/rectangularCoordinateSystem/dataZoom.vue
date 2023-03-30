<!-- 柱状图展示 -->
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
/* 将xAxis，yAxis里面的参数互换就能形成横向柱状图 */
var option = {
  //区域缩放器
  dataZoom: [
    {
      //缩放器类型  slider，inside
      type: 'slider',
      //指明缩放器起作用的位置
      xAxisIndex: 0
    },
    {
      type: 'slider',
      yAxisIndex: 0,
      //指明缩放器起始缩放比例
      start: 0,
      end: 80
    }
  ],
  //网格
  grid: {
    show: true
  },
  //标题
  title: {
    text: '成绩展示',
    //标题样式
    textStyle: {
      color: 'red'
    },
    //标题边框
    borderWidth: 5,
    //标题颜色
    borderColor: 'blue',
    //标题圆角
    borderRadius: 5,
    //标题位置  left  right  top  buttom
    left: 50,
    top: 10
  },
  //提示框
  tooltip: {
    //触发类型  item柱的内部   axis柱的轴上
    trigger: 'axis',
    //触发时机
    triggerOn: 'mousemove|click',
    //字符串模板  格式化或者回调函数两种形式
    //formatter: '{b}的{a}成绩是{c}'
    formatter: function (arg) {
      //arg包含鼠标滑过的柱状图的信息
      //return arg[0].name + '的' + arg[0].seriesName + '成绩是' + arg[0].data
      let tooltipMsg = ''
      arg.forEach((item, index) => {
        tooltipMsg =
          tooltipMsg +
          '\n' +
          item.name +
          '的' +
          item.seriesName +
          '成绩是' +
          item.data
      })
      return tooltipMsg
    },
    //坐标轴指示器配置项  鼠标划到哪，坐标轴也有显示
    axisPointer: {
      //指示器类型 line  shadow cross
      type: 'shadow',
      //文本标签
      label: {
        show: true
      }
    }
  },
  //内置工具栏
  toolbox: {
    feature: {
      //保存为图片
      saveAsImage: {},
      //数据视图
      dataView: {},
      //重置功能
      restore: {},
      //区域缩放
      dataZoom: {},
      //动态图标类型的切换
      magicType: {
        type: ['bar', 'line']
      }
    }
  },
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
