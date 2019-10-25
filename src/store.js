import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let defaultCity = '上海'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}
export default new Vuex.Store({
  state: {
    token: '',
    city: defaultCity
  },
  mutations: {
    CHANGE_CITY (state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (e) {}
    }
  },
  actions: {
    change_city (ctx, city) {
      ctx.commit('CHANGE_CITY', city)
    }
  }
})
