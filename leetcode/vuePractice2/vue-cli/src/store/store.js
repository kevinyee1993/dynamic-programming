import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


// IMPORTANT
// max wrote new Vuex.store instead of capital Store
// this caused an error
// Right way to do it is this way new Vuex.Store
export const store = new Vuex.Store({
  state: {
    servers: [
      {id: 1, status: 'Stable'},
      {id: 2, status: 'Critical'},
      {id: 3, status: 'Unknown'},
      {id: 4, status: 'Critical'},
      {id: 5, status: 'Stable'}
    ],
    selectedServer: null
  },
  mutations: {
    selectServer: function(state, payload) {
      state.selectedServer = payload;
    },
    fixServer: function(state, payload) {
      state.servers[payload - 1].status = 'Stable';
    }
  }
});



  // state: {
    //   counter: 0
    // },
    // getters: {
      //   doubleValue: function(state) {
        //     return state.counter * 2;
        //   },
        //   butts: function(state) {
          //     return (state.counter * 3) + 'butts';
          //   }
          // },
          // mutations: {
            //   increment: function(state) {
              //     state.counter++;
              //   },
              //   decrement: function(state) {
                //     state.counter--;
                //   }
                // },
                // actions: {
                  //   increment: ({ commit }) => {
                    //     setTimeout(() => { commit('increment'); },1000);
                    //   },
                    //   decrement: ({ commit }) => {
                      //     commit('decrement');
                      //   }
                      // }
