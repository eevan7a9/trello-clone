import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";

@Module
export default class BoardBackground extends VuexModule {
  background =
    "background-image:url(https://images.unsplash.com/photo-1527901031195-a21e7b21052c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80)";

  get boardBackground() {
    return this.background;
  }
  @Mutation
  public updateBackground(background: string) {
    this.background = background;
  }
  @Action
  public setBackground(bg: { img: boolean; content: string }) {
    let background = bg.content;
    if (bg.img) {
      background = `background-image:url(${bg.content})`;
    } else {
      background = `background:${bg.content}`;
    }
    this.context.commit("updateBackground", background);
  }
}
