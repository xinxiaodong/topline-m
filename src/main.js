import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 加载验证插件的初始配置
import './utils/validation.js'

// REM适配: 动态设置html标签字体大小
import 'amfe-flexible'

// 加载全局样式
import './styles/index.less'

// 加载初始日期时间库
import './utils/datetime'

// 加载注册 vant 组件模块
import './utils/register-vant.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
