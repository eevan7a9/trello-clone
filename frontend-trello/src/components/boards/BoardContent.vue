<template>
  <div class="content-wrapper text-left">
    <div class="lists-container d-flex px-2 pr-5">
      <draggable
        class="list-group"
        tag="div"
        v-model="lists"
        v-bind="dragOptions"
        @start="isDragging = true"
        @end="isDragging = false"
      >
        <transition-group type="transition" name="flip-list" class="d-flex">
          <div class="list-group-item m-0 p-0" v-for="list of lists" :key="list.id">
            <BoardList :list="list"></BoardList>
          </div>
        </transition-group>
      </draggable>
      <div class="add-list m-1" @click="showListForm">
        <div class="open-add-list d-flex align-items-center">
          <img src="@/assets/icons/plus.svg" alt="plus" />
          <h6 class="p-0 m-0 text-light">Add another list</h6>
        </div>
      </div>
      <div class="extra-spacer p-2"></div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import BoardList from "@/components/boards/BoardList";
export default {
  components: {
    draggable,
    BoardList
  },
  computed: {
    lists: {
      get() {
        return this.$store.state.Boards.currentBoard.lists;
      },
      set(value) {
        this.$store.commit("updateBoardLists", value);
      }
    },
    dragOptions() {
      return {
        animation: 0,
        group: "lists",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  methods: {
    showListForm() {
      console.log("show the form");
    }
  },
  created() {
    this.$store.dispatch("getBoardData", 1);
  }
};
</script>

<style lang="scss" scoped>
.content-wrapper {
  background: rgba(80, 75, 75, 0.144) (117, 104, 104);
  width: 100vw;
  // overflow-x: scroll;
}
.lists-container {
  max-height: 100vh;
  width: 700px;
  width: 100%;
  white-space: nowrap;
}
// dargdrop
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
  width: 272px;
  background: transparent;
  border: none;
}
.add-list {
  cursor: pointer;
  min-width: 280px;
  background-color: rgba(0, 0, 0, 0.219);
  border-radius: 3px;
  height: 42px;
  &:hover {
    background: rgba(0, 0, 0, 0.411);
  }
  .open-add-list {
    padding: 20px;
    height: 32px;
  }
}
</style>
