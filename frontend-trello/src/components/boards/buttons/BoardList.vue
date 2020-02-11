<template>
  <div class="dropdown" v-click-outside="{
    exclude: [],
    handler: 'onClose'
  }">
    <button
      @click="toggleDropdown"
      class="board-header-btn text-light p-1 d-flex justify-content-center align-items-center"
    >
      <img src="@/assets/icons/trello.svg" alt="trello" />
      <span class="px-2">Boards</span>
    </button>
    <div class="dropdown-content mt-3 mr-2 pb-3" :class="{'active' : isShown}">
      <header class="py-2 px-1 m-0 row">
        <input
          type="text"
          class="form-control m-1"
          ref="searchBoard"
          placeholder="Find boards by name..."
        />
      </header>
      <hr class="mt-0 pt-0" />
      <div class="px-4 text-dark w-100">
        <p>boards...</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BoardList extends Vue {
  $refs!: {
    searchBoard: HTMLInputElement;
  };

  isShown = false;

  toggleDropdown() {
    this.isShown = !this.isShown;

    setTimeout(() => {
      this.$refs.searchBoard.focus();
    }, 50);
  }
  onClose() {
    if (this.isShown) {
      this.isShown = !this.isShown;
    }
  }
}
</script>


<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: inline-block;
  .dropdown-content {
    display: none;
    position: fixed;
    background-color: #ffff;
    width: 304px;
    height: 93vh;
    overflow: auto;
    left: 0;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 99999;
    border-radius: 5px;
    &.active {
      display: block;
    }
    header {
      .close-icon {
        cursor: pointer;
      }
    }
  }
  .board-header-btn {
    background: hsla(0, 0%, 100%, 0.3);
    border-radius: 5px;
    border: 0px solid;
  }
}
</style>
