import Vue from 'vue';
import App from './App';
import router from './router';
import store from './vuex/store';

new Vue({
    store,
    el: '#app',
    router,
    render: h => h(App)
});
