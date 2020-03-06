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
        handle=".handle"
      >
        <transition-group type="transition" name="flip-list" class="d-flex transition">
          <div class="list-group-item m-1 p-0" v-for="list of lists" :key="list.id">
            <BoardList :list="list"></BoardList>
          </div>
        </transition-group>
      </draggable>
      <BoardAddList :boardId="$store.state.Boards.currentBoard.id"></BoardAddList>
      <div class="ml-2 p-2" :class="{ 'extra-spacer': sidebarStatus }"></div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import BoardList from "@/components/boards/BoardList";
import BoardAddList from "@/components/boards/buttons/BoardAddList";
import { mapGetters } from "vuex";
export default {
  components: {
    draggable,
    BoardList,
    BoardAddList
  },
  computed: {
    ...mapGetters(["sidebarStatus"]),
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
  // min-height: 20px;
  height: 130px;
  .transition {
    height: 130px;
  }
}
.list-group-item {
  width: 272px;
  background: transparent;
  border: none;
}

.extra-spacer {
  min-width: 339px;

  display: block;
}
</style>
