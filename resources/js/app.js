import Vue from 'vue'
import router from "./router";
import IndexComponent from "./components/IndexComponent";
require('./bootstrap');

const app = new Vue({
    el: '#app',
    components: {
        IndexComponent
    },
    router
});
