//引入vue
import Vue from "vue";
//引入App
import App from "./App.vue";
//關閉vue生產提示
Vue.config.productionTip = false;

//創建vue
new Vue({
  // 將App組件放入容器中
  render: (h) => h(App),
}).$mount("#app");
