<template>
  <div class="dropdown" v-click-outside="{
    exclude: [],
    handler: 'onClose'
  }">
    <button
      @click="toggleDropdown"
      class="board-header-btn text-light p-1 d-flex justify-content-center align-items-center"
    >
      <img src="@/assets/icons/bell.svg" alt="bell" />
    </button>
    <div class="dropdown-content mt-3 mr-2 pb-3" :class="{'active': isShown}">
      <header class="py-2 px-1 m-0 row">
        <span class="col-10 text-capitalize text-muted m-0 pl-5">Notifications</span>
        <span class="close-icon col-2 m-0" @click="toggleDropdown">
          <img src="@/assets/icons/x.svg" alt srcset />
        </span>
      </header>
      <hr class="mt-0 pt-0" />
      <div class="px-4 text-dark w-100">
        <p class="text-left">
          <u>View All</u>
        </p>
        <div class="p-4">
          <img
            alt="Taco"
            src="https://a.trellocdn.com/prgb/dist/images/taco-sleep.0582d9f3bdb5060e7285.svg"
          />
          <h6 class="text-muted font-weight-normal mt-3">No Unread Notifications</h6>
          <small class="mb-3">
            Click
            <span class="text-primary">View All</span> to view all of your notifications
          </small>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BoardNotification extends Vue {
  isShown = false;

  toggleDropdown() {
    this.isShown = !this.isShown;
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
    overflow: auto;
    right: 0;
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
