import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage'
import decodeJwt from 'jwt-decode'

const USER_KEY = 'user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 登录用户，一个对象，包含 token 信息
    user: getItem(USER_KEY) // 当前登录用户状态（token）
  },
  mutations: {
    // 登录成功和退出登录都会调用
    setUser (state, data) {
      if (data && data.token) {
        data.id = decodeJwt(data.token).user_id
      }
      state.user = data
      // 为了避免页面刷新数据丢失，我们这里使用本地存储进行 **持久化**
      setItem(USER_KEY, state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
