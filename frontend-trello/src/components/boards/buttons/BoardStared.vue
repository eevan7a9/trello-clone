<template>
  <div class="d-flex justify-content-center align-items-center">
    <button
      class="board-header-btn p-2 d-flex justify-content-center align-items-center mr-2"
      @click="toggleStar"
    >
      <img src="@/assets/icons/star.svg" alt="star" v-if="!selected" />
      <img src="@/assets/icons/star-yellow.svg" alt="star" v-else />
    </button>|
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BoardStared extends Vue {
  selected = false;
  toggleStar() {
    this.selected = !this.selected;
  }
}
</script>

<style lang="scss" scoped>
.board-header-btn {
  background-color: rgba(255, 255, 255, 0.219);
  border-radius: 5px;
  border: 0px solid;
  &:hover {
    background: rgba(0, 0, 0, 0.411);
  }
  img {
    height: 20px;
    width: 20px;
  }
}
</style>
