import Vue from 'vue';
import App from './App.vue';

// Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app');

//el: '#app', alternate option to load the HTML
//ES5
// new Vue({
//   render: function(createElement) {
//     return createElement(App);
//   }
