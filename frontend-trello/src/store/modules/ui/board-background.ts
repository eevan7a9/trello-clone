import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";

@Module
export default class BoardBackground extends VuexModule {
  background =
    "url(https://cdn.pixabay.com/photo/2020/02/07/14/15/landscape-4827278_960_720.jpg)";

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
      background = `url(${bg.content})`;
    }
    this.context.commit("updateBackground", background);
  }
}
