import VueRouter from 'vue-router';
import ExampleComponent from "./components/ExampleComponent";
import ExampleView from "./views/ExampleView";

window.Vue = require('vue');

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'example',
            component: ExampleView
        },
    ]
});

const app = new Vue({
    router,
    components: {
        'example-component': ExampleComponent
    }
}).$mount('#app');
