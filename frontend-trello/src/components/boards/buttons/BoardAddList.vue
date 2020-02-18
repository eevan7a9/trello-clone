<template>
  <div class="add-list m-1">
    <div class="open-add-list d-flex align-items-center" @click="showListForm" v-if="!isFormOpen">
      <img src="@/assets/icons/plus.svg" alt="plus" />
      <h6 class="p-0 m-0 text-light">Add another list</h6>
    </div>
    <div class="add-list-form p-1" :class="{'show' : isFormOpen}">
      <input
        type="input"
        class="form-control border-primary"
        v-model.trim="listTitle"
        placeholder="Enter list title..."
        ref="inputList"
        @keypress.enter="submitForm"
      />
      <div class="mt-1">
        <button class="btn btn-success" @click.stop="submitForm">Add List</button>
        <span @click.stop="submitForm">
          <img src="@/assets/icons/x.svg" alt="close" class="ml-1" />
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Ref } from "vue-property-decorator";

@Component
export default class BoardAddList extends Vue {
  @Ref() readonly inputList!: HTMLInputElement;

  @Prop(Number) private boardId: number | undefined;

  isFormOpen = false;

  listTitle = "";

  showListForm() {
    this.isFormOpen = true;
    this.$nextTick(() => {
      this.inputList.focus();
    });
  }
  submitForm() {
    if (this.listTitle.length) {
      this.$store.dispatch("addBoardList", this.listTitle);
      this.listTitle = "";
    }
    this.isFormOpen = false;
  }
}
</script>

<style lang="scss" scoped>
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

  .add-list-form {
    background: #ebecf0;
    height: 0;
    visibility: hidden;
    transition: height 0.2s ease-out, opacity 0.6s;
    opacity: 0;
    &.show {
      visibility: visible;
      height: 90px;
      transition: height 0.2s ease-in, opacity 0.6s;
      opacity: 1;
    }
  }
}
</style>
