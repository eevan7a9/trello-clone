import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import dummyData from "@/assets/dummy-data.json";

@Module
export default class Boards extends VuexModule {
  currentBoard: {
    id: number;
    title: string;
    lists: Array<object>;
    adminId: number;
    members: Array<object>;
  } = {
    id: 0,
    title: "dddd",
    lists: [],
    adminId: 0,
    members: []
  };

  get getCurrentBoard(): object {
    return this.currentBoard;
  }

  @Mutation
  public setBoardData(boardData: {
    id: number;
    title: string;
    lists: Array<object>;
    adminId: number;
    members: Array<object>;
  }) {
    this.currentBoard = boardData;
  }
  @Mutation
  public updateBoardLists(lists: Array<object>) {
    this.currentBoard.lists = lists;
  }

  @Action
  public async getBoardData(id: number) {
    const foundBoard = JSON.parse(
      JSON.stringify(dummyData.boards.find(board => board.id == id))
    );
    if (foundBoard) {
      dummyData.lists.forEach(list => {
        if (list.boardId == foundBoard.id) {
          foundBoard.lists.push(list);
        }
      });
      this.context.commit("setBoardData", foundBoard);
    }
  }
}
