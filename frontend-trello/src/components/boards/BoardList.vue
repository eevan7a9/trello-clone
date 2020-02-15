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
    <div class="cards-wrapper py-2">
      <draggable
        class="list-group"
        tag="div"
        v-model="cards"
        v-bind="dragOptions"
        @start="isDragging = true"
        @end="isDragging = false"
      >
        <transition-group type="transition" name="flip-list" class="d-flex flex-column">
          <div class="list-group-item p-0 mx-2" v-for="card of cards" :key="card.id">
            <BoardCard :card="card"></BoardCard>
          </div>
        </transition-group>
      </draggable>
      <div class="add-card-form px-2" v-show="isAddOpen">
        <textarea
          class="px-2 pt-2 pb-5"
          ref="textarea"
          cols="1"
          rows="1"
          @input="autoGrow"
          @blur="hideCardFrom"
          placeholder="Enter a title for this card..."
        ></textarea>
      </div>
    </div>
    <!-- footer starts -->
    <footer class="add-card px-1 py-1 mx-2" @click="showCardForm">
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
  data() {
    return {
      isAddOpen: false
    };
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
  },
  methods: {
    autoGrow() {
      const element = this.$refs.textarea;
      element.style.height = "5px";
      // element.style.paddingBottom = "40px";
      element.style.height = element.scrollHeight + "px";
    },
    showCardForm() {
      this.isAddOpen = true;
      this.$nextTick(() => {
        this.$refs.textarea.focus();
      });
    },
    hideCardFrom() {
      this.isAddOpen = false;
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
  .cards-wrapper {
    overflow: hidden;
    padding: 2px 4px;
    position: relative;
    .add-card-form textarea {
      font-size: 14px;
      width: 240px;
      resize: none;
      border: none;
      overflow: hidden;
      overflow-wrap: break-word;
      border-radius: 5px;
      border-bottom: 1px solid #c6bcbc;
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
  cursor: pointer;
  border: none;
  border-bottom: 1px solid #c6bcbc;
  margin-bottom: 6px;
}
</style>
