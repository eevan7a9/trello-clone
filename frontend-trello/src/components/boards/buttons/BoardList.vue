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
        <div class="recent-boards">
          <header class="text-left">
            <img src="@/assets/icons/clock.svg" alt="clock" class="mr-1" />
            <small class="font-weight-bold text-muted">RECENT BOADRS</small>
          </header>
          <div class="boards-list mt-2">
            <div class="row board-item">
              <div class="col-2 bg-dark py-2 img-container">---</div>
              <div class="col-sm-9 text-left d-flex align-items-center label-container">
                <h6 href="#" class="board-title text-dark font-weight-bold m-0">My Projects</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Ref, Vue } from "vue-property-decorator";

@Component
export default class BoardList extends Vue {
  @Ref() readonly searchBoard!: HTMLInputElement;

  isShown = false;

  toggleDropdown() {
    this.isShown = !this.isShown;
    this.$nextTick(() => this.searchBoard.focus());
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
  .recent-boards {
    header {
      img {
        height: 20px;
      }
    }
    .boards-list {
      .board-item {
        background: rgba(121, 121, 121, 0.349);
        border-radius: 5px;
        cursor: pointer;
        &:hover {
          background: rgba(121, 121, 121, 0.479);
        }
        .img-container {
          // border-radius: 6px;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }
        .label-container {
          .board-title {
            font-size: 15px;
          }
        }
      }
    }
  }
}
</style>
