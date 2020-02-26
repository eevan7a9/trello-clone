import { Module, VuexModule, Action, Mutation } from "vuex-module-decorators";
import dummyData from "@/assets/dummy-data.json";

interface Board {
  id: number;
  title: string;
  lists: BoardList[];
  adminId: number;
  members: Array<object>;
  activity: Array<object>;
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
  watch: boolean;
  comments: Array<object>;
}

@Module
export default class Boards extends VuexModule {
  currentBoard: Board = {
    id: 0,
    title: "dddd",
    lists: [],
    adminId: 0,
    members: [],
    activity: []
  };

  get getCurrentBoard(): object {
    return this.currentBoard;
  }
  get getBoardActivity(): Array<object> {
    return this.currentBoard.activity;
  }

  @Mutation
  public setBoardData(boardData: Board) {
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
  @Mutation
  public updateCardDesc(payload: {
    cardId: number;
    listId: number;
    desc: string;
  }) {
    const foundList = this.currentBoard.lists.find(
      list => list.id == payload.listId
    );
    if (foundList) {
      const foundCard = foundList.cards.find(card => card.id == payload.cardId);
      foundCard ? (foundCard.desc = payload.desc) : "";
    }
  }
  @Mutation
  public updateCardTitle(payload: {
    cardId: number;
    listId: number;
    title: string;
  }) {
    const foundList = this.currentBoard.lists.find(
      list => list.id == payload.listId
    );
    if (foundList) {
      const foundCard = foundList.cards.find(card => card.id == payload.cardId);
      foundCard ? (foundCard.title = payload.title) : "";
    }
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
      label: "",
      watch: true,
      comments: []
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
