import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import storeConfig from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCaretRight);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store(storeConfig);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
