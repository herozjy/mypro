import Vue from 'vue'
import App from './App.vue'
//路由
import router  from "./router/router"
//element-ui
import ElementUI  from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI) ;

//vue-resource
import VueResource from "vue-resource";
Vue.use(VueResource);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
