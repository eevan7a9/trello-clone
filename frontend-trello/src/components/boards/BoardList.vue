<template>
  <div class="list-wrapper py-1 pt-2 m-1 handle">
    <!-- hedear starts -->
    <header class="d-flex justify-content-between align-items-center">
      <h6
        class="m-0 px-3 py-2 font-weight-bold"
        @click="enableListEdit"
        v-if="!listEdit"
      >{{list.title}}</h6>
      <input
        class="ml-1"
        ref="editList"
        @blur="hideListEdit"
        :value="list.title"
        type="text"
        v-else
      />
      <span>
        <img src="@/assets/icons/more-horizontal-dark.svg" alt="star" class="mr-2" />
      </span>
    </header>
    <!-- header ends -->
    <div class="cards-wrapper pt-2">
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
            <BoardCard :card="card" :listTitle="list.title"></BoardCard>
          </div>
        </transition-group>
      </draggable>
    </div>
    <BoardAddCard :listId="list.id"></BoardAddCard>
  </div>
</template>
<script>
import draggable from "vuedraggable";
import BoardCard from "@/components/boards/BoardCard";
import BoardAddCard from "@/components/boards/buttons/BoardAddCard";
export default {
  components: {
    draggable,
    BoardCard,
    BoardAddCard
  },
  props: {
    list: Object
  },
  data() {
    return {
      listEdit: false
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
    enableListEdit() {
      console.log("edit");
      this.listEdit = true;
      this.$nextTick(() => {
        this.$refs.editList.focus();
      });
    },
    hideListEdit() {
      if (this.$refs.editList.value.length) {
        this.list.title = this.$refs.editList.value;
      }
      this.listEdit = false;
    }
  }
};
</script>


<style lang="scss" scoped>
.list-wrapper {
  background-color: #ebecf0;
  // height: 100%;
  width: 272px;
  box-sizing: border-box;
  max-height: 100%;
  position: relative;
  white-space: normal;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  header {
    overflow: hidden;
    overflow-wrap: break-word;

    background: #ebecf0;
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
    background: #ebecf0;
    position: relative;
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
  min-height: 0px;
}
.list-group-item {
  cursor: pointer;
  border: none;
  border-bottom: 1px solid #c6bcbc;
  margin-bottom: 6px;
}
</style>
