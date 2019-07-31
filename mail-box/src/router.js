import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import MailDetails from "./views/MailDetails.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/mail",
      name: "mail",
      component: MailDetails
    }
  ]
});
