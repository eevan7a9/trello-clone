<template>
  <div class="w-100 bg-danger">
    <h4 class="m-0 p-0 w-100 bg-danger">
      <input
        ref="editTitle"
        class="m-0 p-1 font-weight-bold w-100"
        :class=" onEditTitle ? '' : 'off-edit bg-light'"
        type="text"
        :value="card.title"
        @click="onEditTitle = true"
        @blur=" disableEditTitle"
      />
    </h4>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Ref } from "vue-property-decorator";

@Component
export default class CardTitle extends Vue {
  @Ref() readonly editTitle!: HTMLInputElement;
  @Prop(Object) private card!: { id: number; listId: number; title: string };
  onEditTitle = false;

  public disableEditTitle() {
    if (this.editTitle.value.length) {
      this.$store.commit("updateCardTitle", {
        cardId: this.card.id,
        listId: this.card.listId,
        title: this.editTitle.value
      });
    }
    this.onEditTitle = false;
  }
}
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  color: #172b4d;
  &.off-edit {
    border: solid 2px #f8f9fa;
  }
}
</style>
