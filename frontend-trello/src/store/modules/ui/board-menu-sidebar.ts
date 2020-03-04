import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";

@Module
export default class BoardMenuSidebar extends VuexModule {
  menuSidebar = true;
  menuHeader = "Menu";
  componentOf = "";
  showItem = false; // when clicked menubar item
  menubarItems = [
    {
      icon: "trello-dark.svg",
      title: "about this board",
      contentOf: "MenubarAbout"
    },
    {
      icon: "square-grey.svg",
      title: "change background",
      contentOf: "MenubarBackground"
    },
    {
      icon: "search-grey.svg",
      title: "search cards",
      contentOf: "MenubarSearchCard"
    },
    {
      icon: "sticker-grey.svg",
      title: "stickers",
      contentOf: "MenubarStickers"
    }
  ];

  get sidebarStatus(): boolean {
    return this.menuSidebar;
  }
  get itemsList(): Array<object> {
    return this.menubarItems;
  }
  get menubarTitle(): string {
    return this.menuHeader;
  }
  get componentName(): string {
    return this.componentOf;
  }
  get showItemContent(): boolean {
    return this.showItem;
  }

  @Mutation
  public changeSidebarStatus() {
    this.menuSidebar = !this.menuSidebar;
  }
  @Mutation
  public updateMenubarUi(
    list: {
      icon: string;
      title: string;
      contentOf: string;
    } = { icon: "", title: "menu", contentOf: "" }
  ) {
    this.showItem = list.title == "menu" ? false : true;
    this.menuHeader = list.title;
    this.componentOf = list.title == "menu" ? "" : list.contentOf;
  }

  @Action
  public async toggleMenuSidebar() {
    this.context.commit("changeSidebarStatus");
  }
  @Action
  public selectMenubarItem(
    list: {
      icon: string;
      title: string;
      contentOf: string;
    } = { icon: "", title: "menu", contentOf: "" }
  ) {
    this.context.commit("updateMenubarUi", list);
  }
}
