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
            class="list-group-item p-2 bg-light mx-2"
            id="listItem"
            v-for="list of lists"
            :key="list.id"
          >
            <h1>{{list.title}}</h1>
          </div>
        </transition-group>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import { mapGetters } from "vuex";
export default {
  components: {
    draggable
  },
  computed: {
    lists: {
      get() {
        return this.$store.state.Boards.board.lists;
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
  background: red;
  width: 100vw;
  // overflow-x: scroll;
}
.lists-container {
  max-height: 100vh;
  width: 700px;
  width: 100%;
  white-space: nowrap;

  #listITem {
    display: inline-block;
    width: 400px;
  }
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
}
.list-group-item i {
  cursor: pointer;
}
</style>
