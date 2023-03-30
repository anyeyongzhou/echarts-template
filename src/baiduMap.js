export function Map(ak) {
  return new Promise(function (resolve, reject) {
    window.init = function () {
      resolve(BMapGL)
    }
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src =
      '//api.map.baidu.com/api?v=2.0&type=webgl&ak=' + ak + '&callback=init'
    script.onerror = reject
    document.head.appendChild(script)
  })
}
