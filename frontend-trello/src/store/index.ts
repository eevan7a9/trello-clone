import Vue from "vue";
import Vuex from "vuex";
import BoardMenuSidebar from "./modules/ui/board-menu-sidebar";
import BoardBackground from "./modules/ui/board-background";
import Boards from "./modules/boards";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    BoardMenuSidebar,
    BoardBackground,
    Boards
  }
});
