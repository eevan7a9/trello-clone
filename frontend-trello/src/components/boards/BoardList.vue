<template>
  <div class="py-1 pt-2 m-1">
    <!-- hedear starts -->
    <header class="d-flex justify-content-between align-items-center">
      <h6 class="m-0 px-3 font-weight-bold">{{list.title}}</h6>
      <span>
        <img src="@/assets/icons/more-horizontal-dark.svg" alt="star" class="mr-2" />
      </span>
    </header>
    <!-- header ends -->
    <div class="py-2">
      <draggable
        class="list-group"
        tag="div"
        v-model="cards"
        v-bind="dragOptions"
        @start="isDragging = true"
        @end="isDragging = false"
      >
        <transition-group type="transition" name="flip-list" class="d-flex flex-column">
          <div class="list-group-item bg-light p-0 mb-2 mx-2" v-for="card of cards" :key="card.id">
            <BoardCard :card="card"></BoardCard>
          </div>
        </transition-group>
      </draggable>
    </div>
    <!-- footer starts -->
    <footer class="add-card px-3 py-1">
      <span>
        <img src="@/assets/icons/plus-dark.svg" alt="star" class="mr-2" />
      </span>
      <span>Add another card</span>
    </footer>
    <!-- footer ends -->
  </div>
</template>
<script>
import draggable from "vuedraggable";
import BoardCard from "@/components/boards/BoardCard";
export default {
  components: {
    draggable,
    BoardCard
  },
  props: {
    list: Object
  },
  computed: {
    cards: {
      get() {
        return this.list.cards;
      },
      set(value) {
        this.$store.commit("updateBoardCards", {
          cards: value,
          listId: this.list.id
        });
      }
    },
    dragOptions() {
      return {
        animation: 0,
        group: "cards",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  }
};
</script>


<style lang="scss" scoped>
div {
  background-color: #ebecf0;
  border-radius: 3px;
  box-sizing: border-box;
  max-height: 100%;
  position: relative;
  white-space: normal;
  header {
    overflow: hidden;
    overflow-wrap: break-word;
    height: 28px;
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
