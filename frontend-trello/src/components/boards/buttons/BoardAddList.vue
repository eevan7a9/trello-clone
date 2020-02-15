<template>
  <div class="add-list m-1" @click="showListForm">
    <div class="open-add-list d-flex align-items-center">
      <img src="@/assets/icons/plus.svg" alt="plus" />
      <h6 class="p-0 m-0 text-light">Add another list</h6>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class BoardAddList extends Vue {
  @Prop(Number) private boardId: number | undefined;

  showListForm() {
    console.log("adding list...", this.boardId);
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
}
</style>
