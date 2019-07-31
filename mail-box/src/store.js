import Vue from "vue";
import Vuex from "vuex";
import { api } from "./services/MailAPI";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentMail: {}
  },
  mutations: {
    READ_MAIL(state, payload) {
      state.currentMail = payload.mail;
    }
  },
  getters: {
    getCurrentMail: state => {
      return state.currentMail;
    }
  },
  actions: {
    updateRead(context, payload) {
      api.put("/mails", payload);
    }
  }
});
