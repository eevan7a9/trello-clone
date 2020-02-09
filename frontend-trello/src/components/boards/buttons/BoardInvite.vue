<template>
  <div class="dropdown">
    <button
      @click="toggleDropdown"
      class="board-header-btn text-light p-2 d-flex justify-content-center align-items-center mr-2"
    >
      <span class="text-capitalize">Invite</span>
    </button>
    <div class="dropdown-content mt-2 pb-3" :class="{'active': popupsValue === dropdownOf}">
      <header class="py-2 px-1 m-0 row">
        <span class="col-md-10 text-capitalize text-muted m-0 pl-5">Invite To Board</span>
        <span class="close-icon col-md-2 m-0" @click="toggleDropdown">
          <img src="@/assets/icons/x.svg" alt srcset />
        </span>
      </header>
      <hr class="mt-0 pt-0" />
      <div class="px-2 text-dark w-100">
        <form class="w-100" @submit.prevent="email=''">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              v-model="email"
              placeholder="Email address or name"
            />
          </div>
          <button type="submit" class="w-100 btn btn-success">Invite</button>
        </form>
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
export default class BoardInvite extends Vue {
  email = "";
  members: Array<string> = ["E", "S"];
  dropdownOf = "invite";

  toggleDropdown() {
    this.$store.dispatch("togglePopups", this.dropdownOf);
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
    }
    .visible-label {
      cursor: pointer;
      &:hover {
        color: rgb(0, 0, 0);
      }
    }
  }
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
