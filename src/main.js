import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { createApp } from "vue"
import vueCesium from 'vue-cesium'

import ElementUI from 'element-ui';

Vue.config.productionTip = false

Vue.use(ElementUI);

const vc=createApp(App)
vc.use(vueCesium,{
  cesiumPath:'https://unpkg.com/cesium/Build/Cesium/Cesium.js',
  accessToken:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Y2Y3MGQ3Ny00MDAyLTQyMzItYjM1Mi0xZTU1NTA5MDZkM2QiLCJpZCI6NjQwMzcsImlhdCI6MTYyODc1NTI2Nn0.9SB6UYlYYusDA1nK9c6Ie4btemLIBgTbeEmKr0xfmag'
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
