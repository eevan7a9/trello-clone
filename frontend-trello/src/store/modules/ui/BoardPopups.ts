import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

@Module
export default class BoardPopups extends VuexModule {
  popups = "";

  public get popupsValue(): string {
    return this.popups;
  }
  @Mutation
  changePopupsValue(popup: string) {
    if (this.popups === popup) {
      this.popups = "";
    } else {
      this.popups = popup;
    }
  }
  @Action
  togglePopups(popup: string) {
    this.context.commit("changePopupsValue", popup);
  }
}
