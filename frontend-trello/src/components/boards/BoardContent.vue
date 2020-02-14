<template>
  <div class="content-wrapper text-left">
    <div class="lists-container d-flex">
      <draggable
        class="list-group"
        tag="div"
        v-model="lists"
        v-bind="dragOptions"
        @start="isDragging = true"
        @end="isDragging = false"
      >
        <transition-group type="transition" name="flip-list" class="d-flex">
          <div
            class="list-group-item p-2 mx-2 d-flex flex-column"
            v-for="list of lists"
            :key="list.id"
          >
            <BoardList :list="list"></BoardList>
          </div>
        </transition-group>
      </draggable>
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
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  methods: {},
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
  background: #ebecf0;
  border-radius: 3px;
  box-sizing: border-box;
  max-height: 100%;
  position: relative;
  white-space: normal;
}
</style>
