<template>
  <div class="dropdown" v-click-outside="{
    exclude: [],
    handler: 'onClose'
  }">
    <button
      @click="toggleDropdown"
      class="board-header-btn text-light p-2 d-flex justify-content-center align-items-center mr-2"
    >
      <img :src="require(`@/assets/icons/${selected.icon}-white.svg`)" alt="star" class="mr-2" />
      <span>{{selected.label}}</span>
    </button>
    <div class="dropdown-content mt-2 pb-3" :class="{'active': isShown}">
      <header class="py-2 px-1 m-0 row">
        <span class="col-10 text-capitalize text-muted m-0 pl-5">change Visibility</span>
        <span class="close-icon col-2 m-0" @click="toggleDropdown">
          <img src="@/assets/icons/x.svg" alt srcset />
        </span>
      </header>
      <hr class="mt-0 pt-0" />
      <div class="text-dark text-left" v-for="(visible, index) of visibility" :key="index">
        <label class="visible-label pl-3 m-0" @click.prevent="selectVisibilityType(visible)">
          <span>
            <img :src="require(`@/assets/icons/${visible.icon}.svg`)" alt srcset />
          </span>
          {{visible.label}}
        </label>
        <div class="pl-2 mb-1">
          <small class="text-muted">{{visible.desc}}</small>
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
export default class BoardVisibility extends Vue {
  selected: object = {
    label: "Public",
    icon: "globe"
  };
  visibility: Array<object> = [
    {
      label: "Private",
      desc: "Only board members can see and edit this board.",
      icon: "lock"
    },
    {
      label: "Team",
      desc:
        "All members of the team can see and edit this board. The board must be added to a team to enable this.",
      icon: "users"
    },
    {
      label: "Public",
      desc:
        "Anyone on the internet (including Google) can see this board. Only board members can edit.",
      icon: "globe"
    }
  ];
  isShown = false;

  toggleDropdown() {
    this.isShown = !this.isShown;
  }
  onClose() {
    if (this.isShown) {
      this.isShown = !this.isShown;
    }
  }
  selectVisibilityType(visibility: object) {
    this.selected = visibility;
    this.toggleDropdown();
  }
}
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: inline-block;
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 260px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 5px;
    &.active {
      display: block;
    }
    header {
      .close-icon {
        cursor: pointer;
      }
      img {
        height: 20px;
      }
    }
    .visible-label {
      cursor: pointer;
      &:hover {
        color: rgb(0, 0, 0);
      }
    }
  }
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
}
</style>
