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
    <!-- Menu items -->
    <div class="menubar-content">
      <div class="menubar-items p-4" v-if="!showItem">
        <div
          v-for="(list, index) of lists"
          :key="index"
          class="text-left"
          @click="selectMenubarItem(list)"
        >
          <img :src="require(`@/assets/icons/${list.icon}`)" class="m-2" />
          <span class="text-capitalize font-weight-bold text-dark">{{list.title}}</span>
        </div>
        <hr />
      </div>
      <!-- Menubar item's content Starts -->
      <div class="menubar-items-content" v-else>
        <component :is="menuContentOf"></component>
      </div>
      <!-- Menubar item's content Ends -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { mapGetters } from "vuex";
import MenubarAbout from "@/components/boards/menubar/MenubarAbout.vue";
import MenubarBackground from "@/components/boards/menubar/MenubarBackground.vue";
import MenubarSearchCard from "@/components/boards/menubar/MenubarSearchCard.vue";
import MenubarStickers from "@/components/boards/menubar/MenubarStickers.vue";

@Component({
  computed: mapGetters(["sidebarStatus"]),
  components: {
    MenubarAbout,
    MenubarBackground,
    MenubarSearchCard,
    MenubarStickers
  }
})
export default class BoardMenubar extends Vue {
  @Prop(Array) private activity: Array<object> | undefined;

  menuHeader = "menu";
  menuContentOf = "MenubarAbout";

  lists = [
    {
      icon: "trello-dark.svg",
      title: "about this board",
      contentOf: "MenubarAbout"
    },
    {
      icon: "square-grey.svg",
      title: "change background",
      contentOf: "MenubarBackground"
    },
    {
      icon: "search-grey.svg",
      title: "search cards",
      contentOf: "MenubarSearchCard"
    },
    {
      icon: "sticker-grey.svg",
      title: "stickers",
      contentOf: "MenubarStickers"
    }
  ];
  showItem = false; // when clicked menubar item
  toggleMenu() {
    this.$store.dispatch("toggleMenuSidebar");
  }
  selectMenubarItem(
    list: {
      icon: string;
      title: string;
      contentOf: string;
    } = { icon: "", title: "menu", contentOf: "" }
  ) {
    this.showItem = list.title == "menu" ? false : true;
    this.menuHeader = list.title;
    this.menuContentOf = list.title == "menu" ? "" : list.contentOf;
  }
}
</script>

<style lang="scss" scoped>
.side-menubar-wrapper {
  position: fixed;
  right: 0;
  display: block;
  width: 0px;
  height: 100%;
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
          height: 25px;
        }
        span {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
