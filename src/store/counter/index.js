import * as type from "./../types";
const state = {
  counter: 0
};
const mutations = {
  increment: (state, payload) => {
    state.counter+= payload;
  },
  decrement: (state, payload) => {
    state.counter-= payload;
  }
};
const actions = {
  [type.COUNTER_INCREMENT]: ({commit}, payload) => {
    commit("increment", payload); // commit methods in mutations
  },
  [type.COUNTER_DECREMENT]: ({commit}, payload) => {
    commit("decrement", payload); // commit methods in mutations
  }
};
const getters = {
  doubleCounter: state => {
    return state.counter * 2;
  },
  stringCounter: state => {
    return state.counter + " clicks";
  }
};

export default { state, mutations, actions, getters}
