<template>
  <div class="dropdown" v-click-outside="{
    exclude: [],
    handler: 'onClose'
  }">
    <button
      @click="toggleDropdown"
      class="board-header-btn text-light p-2 d-flex justify-content-center align-items-center mr-2"
    >
      <span class="text-capitalize">{{selected}}</span>
    </button>
    <div class="dropdown-content mt-2 pb-3" :class="{'active': isShown}">
      <header class="py-2 px-1 m-0 row">
        <span class="col-10 text-capitalize text-muted m-0 pl-5">Add to a team</span>
        <span class="close-icon col-2 m-0" @click="toggleDropdown">
          <img src="@/assets/icons/x.svg" alt srcset />
        </span>
      </header>
      <hr class="mt-0 pt-0" />
      <div class="px-2 text-dark w-100">
        <small class="font-weight-bold float-left mt-0">This board is part of...</small>
        <div class="form-group">
          <select class="custom-select" v-model="boardPartOf" id="boardPartOf">
            <option selected value="personal">Personal Boards (no team)</option>
            <option v-for="(team, index) of teams" :key="index" :value="team.type">{{team.label}}</option>
          </select>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <button class="btn btn-success px-4" @click="addPartOf">Add</button>
          <a href="#" class="text-muted line">
            <u>Create Team</u>
          </a>
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
export default class BoardPartOf extends Vue {
  isShown = false;
  selected = "personal";
  boardPartOf = "personal";
  teams: Array<object> = [
    { label: "Avengers", type: "team" },
    { label: "Trello Developers", type: "team" },
    { label: "Food Squad", type: "team" }
  ];

  toggleDropdown() {
    this.isShown = !this.isShown;
  }
  onClose() {
    if (this.isShown) {
      this.isShown = !this.isShown;
    }
  }
  addPartOf() {
    this.selected = this.boardPartOf;
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
      background: rgba(0, 0, 0, 0.281);
    }
    img {
      height: 20px;
      width: 20px;
    }
  }
}
</style>
