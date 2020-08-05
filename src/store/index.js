import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
  },
  getters: {
    token: state => state.token,
  },
  actions: {
    setToken({ commit }, data) {
      commit('SET_TOKEN', data)
    },
  },
  mutations: {
    SET_TOKEN(state, data) {
      state.token = data;
    }
  },
  modules: {
  }
})
