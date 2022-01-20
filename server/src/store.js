import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Vuexインスタンス生成
export default new Vuex.Store({
  // state: Vuexで管理する状態を定義
  state: {
    training: [],
  },
  getters: {
    training: state => state.training,
  },
  mutations: {},
  actions: {
    setTraining(context, training) {
      context.state.training.push(training);
    },
    setBTraining(context, training) {
      context.state.training.push(training);
    },

  }
})
