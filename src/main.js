import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faPlusSquare,
    faTimes,
    faTrash,
    faSearch,
    faAngleDoubleRight,
    faAngleDoubleLeft,
    faAngleRight,
    faAngleLeft
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPlusSquare, faTimes, faTrash, faSearch, faAngleDoubleRight, faAngleDoubleLeft, faAngleRight, faAngleLeft);

Vue.component('FontAwesomeIcon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
