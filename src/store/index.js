import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    results: {}
  },
  mutations: {
    SET_RESULTS(state, payload) {
      state.results = payload;
    }
  },
  actions: {
    setResults({ commit }, payload) {
      commit("SET_RESULTS", payload);
    }
  }
});
