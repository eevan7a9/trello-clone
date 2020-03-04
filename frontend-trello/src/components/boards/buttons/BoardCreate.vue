<template>
  <div class="dropdown" v-click-outside="{
    exclude: [],
    handler: 'onClose'
  }">
    <button
      @click="toggleDropdown"
      class="board-header-btn text-light p-1 d-flex justify-content-center align-items-center"
    >
      <img src="@/assets/icons/plus.svg" alt="home" />
    </button>
    <div class="dropdown-content mt-3 mr-2 pb-3" :class="{'active': isShown}">
      <header class="py-2 px-1 m-0 row">
        <span class="col-10 text-capitalize text-muted m-0 pl-5">Create</span>
        <span class="close-icon col-2 m-0" @click="toggleDropdown">
          <img src="@/assets/icons/x.svg" alt srcset />
        </span>
      </header>
      <hr class="mt-0 pt-0" />
      <div class="px-2 text-dark w-100">
        <div class="create-item text-left">
          <img src="@/assets/icons/trello-dark.svg" alt srcset />
          <span class="create-label">Create Board...</span>
          <p
            class="text-muted text-left"
          >A board is made up of cards ordered on lists. Use it to manage projects, track information, or organize anything.</p>
        </div>
        <div class="create-item text-left">
          <img class="users" src="@/assets/icons/users.svg" alt srcset />
          <span class="create-label">Create Teams...</span>
          <p
            class="text-muted text-left"
          >A team is a group of boards and people. Use it to organize your company, side hustle, family, or friends.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
  computed: {
    ...mapGetters(["popupsValue"])
  }
})
export default class BoardCreate extends Vue {
  email = "";
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
    .create-item {
      img {
        height: 20px;
        &.users {
          height: 16px;
        }
      }
      .create-label {
        font-size: 14px;
        cursor: pointer;
      }
      p {
        font-size: 12px;
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
