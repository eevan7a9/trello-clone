import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import dummyData from "@/assets/dummy-data.json";

interface Board {
  id: number;
  title: string;
  lists: BoardList[];
  adminId: number;
  members: Array<object>;
}
interface BoardList {
  id: number;
  boardId: number;
  title: string;
  cards: BoardCard[];
}
interface BoardCard {
  id: number;
  listId: number;
  title: string;
  desc: string;
  members: Array<object>;
  label: string;
}

@Module
export default class Boards extends VuexModule {
  currentBoard: Board = {
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
    lists: BoardList[];
    adminId: number;
    members: Array<object>;
  }) {
    this.currentBoard = boardData;
  }
  @Mutation
  public updateBoardLists(lists: BoardList[]) {
    this.currentBoard.lists = lists;
  }
  @Mutation
  public updateBoardCards(payload: { cards: BoardCard[]; listId: number }) {
    const foundList = this.currentBoard.lists.find(
      list => list.id == payload.listId
    );
    if (foundList) {
      foundList.cards = payload.cards;
    }
  }
  @Mutation insertBoardCard(card: BoardCard) {
    const foundList = this.currentBoard.lists.find(
      list => list.id == card.listId
    );
    if (foundList) {
      foundList.cards.push(card);
    }
  }
  @Mutation
  public insertBoardList(list: BoardList) {
    this.currentBoard.lists.push(list);
  }

  @Action
  public async getBoardData(id: number) {
    const foundBoard = JSON.parse(
      JSON.stringify(dummyData.boards.find(board => board.id == id))
    );
    if (foundBoard) {
      dummyData.lists.forEach(list => {
        if (list.boardId == foundBoard.id) {
          const boardList = JSON.parse(JSON.stringify(list));
          dummyData.cards.forEach(card => {
            if (card.listId == boardList.id) {
              boardList.cards.push(card);
            }
          });
          foundBoard.lists.push(boardList);
        }
      });
      this.context.commit("setBoardData", foundBoard);
    }
  }

  @Action
  public addBoardCard(payload: { listId: number; cardTitle: string }) {
    const card = {
      id: Date.parse(new Date().toString()) / 1000,
      listId: payload.listId,
      title: payload.cardTitle,
      desc: "",
      members: [],
      label: ""
    };
    this.context.commit("insertBoardCard", card);
  }
  @Action
  public addBoardList(listTitle: string) {
    const newList = {
      id: Date.parse(new Date().toString()) / 1000,
      boardId: this.currentBoard.id,
      title: listTitle,
      cards: []
    };
    this.context.commit("insertBoardList", newList);
  }
}
