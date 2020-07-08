
require('./bootstrap');
import router from "./routes";
import VueRouter from "vue-router";
import Index from "./index"
import moment from "moment"
import StarRating from "./shared/components/StarRating";
import FatalError from "./shared/components/FatalError";

window.Vue = require('vue');

// Vue.component(
//     'example-component', 
//     require('./components/ExampleComponent.vue').default);

// Vue.component(
//     'example-2', 
//     require('./components/Example2.vue').default);


Vue.use(VueRouter);

Vue.filter("fromNow", value => moment(value).fromNow());

Vue.component("star-rating", StarRating);
Vue.component("fatal-error", FatalError);

const app = new Vue({
    el: '#app',
    router,
    components:{
        "index":Index
    }
});
