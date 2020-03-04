<template>
  <div class="dropdown" v-click-outside="{
    exclude: [],
    handler: 'onClose'
  }">
    <button
      @click="toggleDropdown"
      class="board-header-btn text-light p-1 d-flex justify-content-center align-items-center"
    >
      <img src="@/assets/icons/info.svg" alt="information" />
    </button>
    <div class="dropdown-content mt-3 mr-2 pb-3" :class="{'active': isShown}">
      <header class="py-2 px-1 m-0 row">
        <span class="col-10 text-capitalize text-muted m-0 pl-5">Information</span>
        <span class="close-icon col-2 m-0" @click="toggleDropdown">
          <img src="@/assets/icons/x.svg" alt srcset />
        </span>
      </header>
      <hr class="mt-0 pt-0" />
      <div class="px-4 text-dark w-100">
        <img
          src="https://a.trellocdn.com/prgb/dist/images/tips/info-image-02@1x.d554cbf6d240549b8ef0.png"
          srcset="https://a.trellocdn.com/prgb/dist/images/tips/info-image-02@1x.d554cbf6d240549b8ef0.png 1x, https://a.trellocdn.com/prgb/dist/images/tips/info-image-02@2x.dc2ae20f9f00051bb6d4.png 2x"
          class="img-fluid"
          role="presentation"
        />
        <h6
          class="font-weight-bold mt-2"
        >It’s Easy To Get Your Team Up And Running With Trello Playbooks</h6>
        <hr />
        <ul class="d-flex justify-content-around list-unstyled">
          <li class="ml-1">
            <a href="#">
              <small class="text-muted">Pricing</small>
            </a>
          </li>
          <li class="ml-1">
            <a href="#">
              <small class="text-muted">App</small>
            </a>
          </li>
          <li class="ml-1">
            <a href="#">
              <small class="text-muted">Blog</small>
            </a>
          </li>
          <li class="ml-1">
            <a href="#">
              <small class="text-muted">Privacy</small>
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
export default class BoardInfo extends Vue {
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
