import Vue from "vue";
import Vuex from "vuex";
import BoardMenuSidebar from "./modules/ui/BoardMenuSidebar";
import BoardPopups from "./modules/ui/BoardPopups";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    BoardMenuSidebar,
    BoardPopups
  }
});
