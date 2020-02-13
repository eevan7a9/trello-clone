import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import dummyData from "@/assets/dummy-data.json";

@Module
export default class Boards extends VuexModule {
  board: {
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

  get currentBoard(): object {
    return this.board;
  }

  @Mutation
  public setBoardData(boardData: {
    id: number;
    title: string;
    lists: Array<object>;
    adminId: number;
    members: Array<object>;
  }) {
    this.board = boardData;
  }
  @Mutation
  public updateBoardLists(lists: Array<object>) {
    this.board.lists = lists;
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
