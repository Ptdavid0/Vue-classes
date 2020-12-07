import Vue from "vue";
import "./plugins/vuetify";

import App from "./App.vue";

//Global Use
import ToolBarF from "./ToolbarF.vue";
import List from "./List.vue";
import ToolBarA from "./ToolbarA.vue";
import Content from "./Content.vue";
import Footer from "./Footer.vue";

Vue.config.productionTip = false;
Vue.component("ToolBarF", ToolBarF);
Vue.component("List", List);
Vue.component("ToolBarA", ToolBarA);
Vue.component("Content", Content);
Vue.component("Footer", Footer);

new Vue({
  render: h => h(App)
}).$mount("#app");
