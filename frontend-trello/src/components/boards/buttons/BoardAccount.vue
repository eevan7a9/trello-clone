<template>
  <div class="dropdown" v-click-outside="{
    exclude: [],
    handler: 'onClose'
  }">
    <button
      @click="toggleDropdown"
      class="board-header-btn text-light bg-primary font-weight-bold p-1 d-flex justify-content-center align-items-center"
    >E</button>
    <div class="dropdown-content mt-3 mr-2 pb-3" :class="{'active': isShown}">
      <header class="py-2 px-1 m-0 row">
        <span class="col-10 text-capitalize text-muted m-0 pl-5">{{user}}(evan.asia)</span>
        <span class="close-icon col-2 m-0" @click="toggleDropdown">
          <img src="@/assets/icons/x.svg" alt srcset />
        </span>
      </header>
      <hr class="mt-0 pt-0" />
      <div class="px-4 text-dark w-100">
        <ul class="links-list list-unstyled text-left">
          <li class="mb-2">
            <a class="text-decoration-none" href="#">
              <span class="text-dark">Profile and Visibility</span>
            </a>
          </li>
          <li class="mb-2">
            <a class="text-decoration-none" href="#">
              <span class="text-dark">Activity</span>
            </a>
          </li>
          <li class="mb-2">
            <a class="list-item js-cards" href="#">
              <span class="text-dark">Cards</span>
            </a>
          </li>
          <li class="mb-2">
            <a class="text-decoration-none" href="#">
              <span class="text-dark">Settings</span>
            </a>
          </li>
          <hr />
          <li class="mb-2">
            <a class="text-decoration-none" href="#">
              <span class="text-dark">Help</span>
            </a>
          </li>
          <li class="mb-2">
            <a class="text-decoration-none" href="#">
              <span class="text-dark">Shortcuts</span>
            </a>
          </li>
          <li class="mb-2">
            <a class="text-decoration-none" href="#">
              <span class="text-dark">Change Language…</span>
            </a>
          </li>
          <hr />
          <li class="mb-2">
            <a class="text-decoration-none" href="#">
              <span class="text-dark">Log Out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BoardAccount extends Vue {
  user = "Evan";
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
    .links-list {
      li {
        a {
          cursor: not-allowed;
        }
      }
    }
  }
  .board-header-btn {
    background: hsla(0, 0%, 100%, 0.3);
    border-radius: 100%;
    border: 0px solid;
    height: 35px;
    width: 35px;
  }
}
</style>
