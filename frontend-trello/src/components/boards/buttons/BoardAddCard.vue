<template>
  <div class="add-card-wrapper">
    <div class="open-add-card px-2" @click="showCardForm" v-if="!isFormOpen">
      <div class="d-flex align-items-center px-2">
        <img src="@/assets/icons/plus-dark.svg" alt="plus" />
        <h6 class="p-0 m-0 text-secondary">Add another card</h6>
      </div>
    </div>
    <div
      class="add-card-form pb-2 d-flex flex-column justify-content-center align-items-center"
      :class="{'show' : isFormOpen}"
    >
      <textarea
        type="input"
        class="form-control pb-5"
        v-model.trim="cardTitle"
        placeholder="Enter card title..."
        ref="inputCard"
        rows="1"
        @keyup="autoGrow"
        @keypress.enter="submitForm"
      ></textarea>
      <div class="mt-2 ml-4 px-1 d-flex align-items-center w-100">
        <button class="btn btn-success" @click.stop="submitForm">Add Card</button>
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
export default class BoardAddCard extends Vue {
  @Ref() readonly inputCard!: HTMLInputElement;

  @Prop(Number) private listId: number | undefined;

  isFormOpen = false;

  cardTitle = "";

  showCardForm() {
    this.isFormOpen = true;
    this.$nextTick(() => {
      this.inputCard.focus();
    });
  }
  autoGrow() {
    const element = this.inputCard;
    element.style.height = "5px";
    // element.style.paddingBottom = "40px";
    element.style.height = element.scrollHeight + "px";
  }
  submitForm() {
    if (this.cardTitle.length) {
      this.$store.dispatch("addBoardCard", {
        listId: this.listId,
        cardTitle: this.cardTitle
      });
      this.cardTitle = "";
    }
    this.isFormOpen = false;
  }
}
</script>

<style lang="scss" scoped>
.add-card-wrapper {
  cursor: pointer;
  width: 272px;
  background-color: #ebecf0;
  height: 42px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  .open-add-card {
    div {
      height: 32px;
      &:hover {
        background: rgb(209, 208, 208);
        border-radius: 5px;
      }
      img {
        height: 20px;
      }
      h6 {
        font-size: 14px;
      }
    }
  }

  .add-card-form {
    background: #ebecf0;

    visibility: hidden;
    transition: height 0.2s ease-out, opacity 0.6s;
    opacity: 0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    &.show {
      visibility: visible;
      min-height: auto;
      transition: height 0.2s ease-in, opacity 0.6s;
      opacity: 1;
    }
    textarea {
      border: none;
      border-bottom: 2px solid #c6bcbc;
      width: 240px;
      overflow: hidden;
      &:focus {
        -webkit-box-shadow: none;
        box-shadow: none;
      }
    }
  }
}
</style>
