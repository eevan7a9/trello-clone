<template>
  <div class="dropdown">
    <button
      @click="toggleSidebar"
      class="board-header-btn text-light p-2 d-flex justify-content-center align-items-center mr-2"
    >
      <span class="text-capitalize">
        <img src="@/assets/icons/more-horizontal.svg" alt="star" class="mr-2" />Show Menu
      </span>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BoardMenu extends Vue {
  toggleSidebar() {
    console.log("toggle menu...");
    this.$store.dispatch("toggleMenuSidebar");
    this.$store.dispatch("togglePopups");
  }
}
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: inline-block;
  .board-header-btn {
    background-color: rgba(0, 0, 0, 0.219);
    border-radius: 5px;
    border: 0px solid;
    &:hover {
      background: rgba(0, 0, 0, 0.411);
    }
  }
}
</style>
