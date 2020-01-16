export default {
    install(Vue) {
        Vue.component('v-dropdown', require('./dropdown.vue').default);
    }
}