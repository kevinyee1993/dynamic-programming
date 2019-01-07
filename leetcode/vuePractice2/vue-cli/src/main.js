import Vue from 'vue';
import App from './App.vue';
import HeaderPage from './components/HeaderPage';
import ServerDetails from './components/ServerDetails';
import ServerManage from './components/ServerManage';
import ServerList from './components/ServerList';
import Counter from './vuexComponents/counter';
import Results from './vuexComponents/results';

import { store } from './store/store';


// Vue.component('header-page', HeaderPage);
// Vue.component('server-details', ServerDetails);
// Vue.component('server-manage', ServerManage);
// Vue.component('server-list', ServerList);
//
// Vue.component('counter', Counter);
// Vue.component('results', Results);

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
