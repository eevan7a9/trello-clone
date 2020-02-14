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
            <!-- hedear starts -->
            <header class="d-flex justify-content-between align-items-center">
              <h6 class="m-0 font-weight-bold py-2">{{list.title}}</h6>
              <span>
                <img src="@/assets/icons/more-horizontal-dark.svg" alt="star" class="mr-2" />
              </span>
            </header>
            <!-- header ends -->
            {{list.cards}}
            <!-- footer starts -->
            <footer class="add-card px-1 py-2">
              <span>
                <img src="@/assets/icons/plus-dark.svg" alt="star" class="mr-2" />
              </span>
              <span>Add another card</span>
            </footer>
            <!-- footer ends -->
          </div>
        </transition-group>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable
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
  header {
    cursor: pointer;
    span {
      img {
        height: 15px;
      }
    }
  }
  .add-card {
    cursor: pointer;
    span {
      color: grey;

      img {
        height: 18px;
      }
    }
    &:hover {
      background: #9e9fa344;
      border-radius: 5px;
      span {
        color: #333;
      }
    }
  }
}
</style>
