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
  previousContent: {
    title: string;
    contentOf: string;
  } = {
    title: "",
    contentOf: ""
  };

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
  @Mutation
  public updatePrevious(
    item: {
      title: string;
      contentOf: string;
    } = {
      title: "",
      contentOf: ""
    }
  ) {
    this.previousContent = { ...item };
    console.log(this.previousContent);
  }

  @Action
  public async toggleMenuSidebar() {
    this.context.commit("changeSidebarStatus");
  }
  @Action
  public setMenubarContent(
    list: {
      icon: string;
      title: string;
      contentOf: string;
    } = { icon: "", title: "menu", contentOf: "" }
  ) {
    if (this.previousContent.contentOf) {
      // load previous content if available
      this.context.commit("updateMenubarUi", this.previousContent);
      // then remove state of previous content
      this.context.commit("updatePrevious", { title: "", contentOf: "" });
    } else {
      this.context.commit("updateMenubarUi", list);
    }
  }
  @Action
  public setPreviousContent(item: { title: string; contentOf: string }) {
    this.context.commit("updatePrevious", item);
  }
}
