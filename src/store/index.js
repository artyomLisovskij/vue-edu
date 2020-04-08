import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    spisok_pokupok: [
      {
        name: 'хлеб', 
        status: false
      },
      {
        name: 'молоко', 
        status: false
      },
      {
        name: 'гречка', 
        status: false
      },
      {
        name: 'туалетная бумага', 
        status: false
      },
      {
        name: 'маски', 
        status: false
      }
    ]
  },
  mutations: {
    changeitem(state, name) {
      for (let item in state.spisok_pokupok) {
        if (state.spisok_pokupok[item].name === name) {
          state.spisok_pokupok[item].status = !state.spisok_pokupok[item].status;
        }
      }
    }
  },
  actions: {
    changeItemByName(context, name) {
      context.commit('changeitem', name);
    }
  }, 
  getters: {
    getStatusByName: (state) => (name) => {
      let result;
      for (let item in state.spisok_pokupok) {
        if (state.spisok_pokupok[item].name === name) {
          result = state.spisok_pokupok[item].status;
        }
      }
      return result;
    }
  }
})
