<script setup>
import { onMounted } from 'vue'
import { Map } from './baiduMap.js'
const mapvgl = require('mapvgl')
onMounted(() => {
  console.log(mapvgl)
  //第一种方式引入 //此处Map('ak').then...请使用自己的ak秘钥
  Map('AQTjKl2aiD60mXUj0NHxU4KC6nYuBznA').then((BMapGL) => {
    //调用map.js中Map()方法，引入百度地图秘钥作为参数
    var map = new BMapGL.Map('map_container') // 创建地图实例
    var point = new BMapGL.Point(113, 23) // 创建点坐标
    map.centerAndZoom(point, 15) // 初始化地图，设置中心点坐标和地图级别
    //倾斜角
    map.setTilt(30)
    //旋转角度
    map.setHeading(0)
    map.enableScrollWheelZoom(true) //开启鼠标滚轮缩放

    // 2. 创建MapVGL图层管理器
    //  console.log(map)

    var view = new mapvgl.View({
      map: map
    })
    // 3. 创建可视化图层，并添加到图层管理器中
    var layer = new mapvgl.HeatPointLayer({
      color: 'rgba(50, 50, 200, 1)',
      shape: 'circle', // 默认为圆形，可传square改为正方形
      blend: 'lighter',
      size: 100,
      gradient: {
        0.0: 'rgb(50, 50, 256)',
        0.1: 'rgb(50, 250, 56)',
        0.5: 'rgb(250, 250, 56)',
        1.0: 'rgb(250, 50, 56)'
      },
      data: []
    })
    var data = []
    for (let i = 0; i < 400; i++) {
      data.push({
        geometry: {
          type: 'Point',
          coordinates: [116.392394, 39.910683 + Math.random() * 4]
        },
        properties: {
          count: 2
        }
      })
    }
    view.addLayer(layer)

    // 5. 关联图层与数据，享受震撼的可视化效果
    layer.setData(data)
  })
})
</script>

<template>
  <div id="map_container"></div>
</template>

<style scoped>
#map_container {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
