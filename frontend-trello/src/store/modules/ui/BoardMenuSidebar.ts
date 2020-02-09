import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";

@Module
export default class BoardMenuSidebar extends VuexModule {
  menuSidebar = true;

  get sidebarStatus(): boolean {
    return this.menuSidebar;
  }

  @Mutation
  public changeSidebarStatus() {
    this.menuSidebar = !this.menuSidebar;
  }

  @Action
  public async toggleMenuSidebar() {
    this.context.commit("changeSidebarStatus");
  }
}
