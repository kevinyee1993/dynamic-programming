import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


// IMPORTANT
// max wrote new Vuex.store instead of capital Store
// this caused an error
// Right way to do it is this way new Vuex.Store
export const store = new Vuex.Store({
  state: {
    counter: 0
  }
});
