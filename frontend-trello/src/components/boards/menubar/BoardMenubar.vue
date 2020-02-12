<template>
  <div class="side-menubar-wrapper bg-light mt-1" :class="{'active' : sidebarStatus}">
    <header class="py-2 px-1 m-0 row border border-bottom">
      <span class="icon col-2" @click="selectMenubarItem()" v-if="showItem">
        <img src="@/assets/icons/chevron-left.svg" alt="back" />
      </span>
      <span
        class="text-capitalize font-weight-bold text-dark m-0"
        :class="showItem ? 'col-8': 'pl-5 col-10'"
      >{{menuHeader}}</span>
      <span class="icon col-2 m-0" @click="toggleMenu">
        <img src="@/assets/icons/x.svg" alt="close" />
      </span>
    </header>

    <div class="menubar-content">
      <div class="menubar-items p-4" v-show="!showItem">
        <div
          v-for="(list, index) of lists"
          :key="index"
          class="text-left"
          @click="selectMenubarItem(list.title)"
        >
          <img :src="require(`@/assets/icons/${list.icon}`)" class="m-2" />
          <span class="text-capitalize font-weight-bold text-dark">{{list.title}}</span>
        </div>
        <hr />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
  computed: mapGetters(["sidebarStatus"])
})
export default class BoardMenubar extends Vue {
  menuHeader = "menu";
  lists = [
    { icon: "trello-dark.svg", title: "about this board" },
    { icon: "square-grey.svg", title: "change background" },
    { icon: "search-grey.svg", title: "search cards" },
    { icon: "sticker-grey.svg", title: "stickers" }
  ];
  showItem = false; // when clicked menubar item
  toggleMenu() {
    this.$store.dispatch("toggleMenuSidebar");
  }
  selectMenubarItem(label = "menu") {
    this.showItem = label === "menu" ? false : true;
    this.menuHeader = label;
  }
}
</script>

<style lang="scss" scoped>
.side-menubar-wrapper {
  display: block;
  width: 0px;
  box-shadow: 0 12px 24px -6px rgba(9, 30, 66, 0.25),
    0 0 0 1px rgba(9, 30, 66, 0.08);
  transition: width 0.3s;
  overflow-x: hidden;
  &.active {
    width: 339px;
    .menubar-content {
      opacity: 1;
    }
  }
  header {
    span {
      font-size: 18px;
      &.icon {
        cursor: pointer;
      }
    }
  }
  .menubar-content {
    opacity: 0;
    .menubar-items {
      div {
        border-radius: 5px;
        cursor: pointer;
        &:hover {
          background: rgba(128, 128, 128, 0.301);
        }
        img {
          height: 20px;
        }
        span {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
