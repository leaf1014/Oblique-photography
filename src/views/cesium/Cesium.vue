<template>
  <vc-viewer @ready="onViewerReady">
    <vc-entity :position="position" :point="point"> </vc-entity>
  </vc-viewer>
</template>
<script>
export default {
  data() {
    return {
      position: null,
      point: null
    }
  },
  methods: {
    onViewerReady({ Cesium, viewer }) {
      this.position = Cesium.Cartesian3.fromDegrees(108, 35, 1000)
      this.point = new Cesium.PointGraphics({
        pixelSize: 28,
        color: Cesium.Color.RED
      })
    }
  }
}
</script>
