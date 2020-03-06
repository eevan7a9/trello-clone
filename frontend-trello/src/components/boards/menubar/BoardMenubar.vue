<template>
  <div class="side-menubar-wrapper bg-light mt-1" :class="{'active' : sidebarStatus}">
    <header class="py-2 px-1 m-0 row border border-bottom bg-light">
      <span class="icon col-2" @click="$store.dispatch('setMenubarContent')" v-if="showItemContent">
        <img src="@/assets/icons/chevron-left.svg" alt="back" />
      </span>
      <span
        class="text-capitalize font-weight-bold text-dark m-0"
        :class="showItemContent ? 'col-8': 'pl-5 col-10'"
      >{{menubarTitle}}</span>
      <span class="icon col-2 m-0" @click="toggleMenu">
        <img src="@/assets/icons/x.svg" alt="close" />
      </span>
    </header>
    <!-- Menu items -->
    <div class="menubar-content">
      <div class="menubar-items p-4" v-if="!showItemContent">
        <div
          v-for="(list, index) of itemsList"
          :key="index"
          class="items text-left"
          @click="$store.dispatch('setMenubarContent', list)"
        >
          <img :src="require(`@/assets/icons/${list.icon}`)" class="m-2" />
          <span class="text-capitalize font-weight-bold text-dark">{{list.title}}</span>
        </div>
        <hr />
        <div class="items disabled text-left d-flex">
          <img src="@/assets/icons/card-zap.svg" class="m-2" />
          <div class="powerup-label mt-1">
            <span class="text-capitalize font-weight-bold text-dark">Power-Ups</span>
            <p class="text-muted m-0 p-0">Calendar, Google Drive and more...</p>
          </div>
        </div>
        <hr />
        <BoardActivity></BoardActivity>
      </div>
      <!-- Menubar item's content Starts -->
      <div class="menubar-items-content" :class="{'show' : showItemContent}">
        <component :is="componentName"></component>
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
import BoardActivity from "@/components/boards/menubar/BoardActivity.vue";
import BackgroundColors from "@/components/boards/menubar/background/BackgroundColors.vue";
import BackgroundImage from "@/components/boards/menubar/background/BackgroundImage.vue";

@Component({
  computed: mapGetters([
    "sidebarStatus",
    "itemsList",
    "menubarTitle",
    "componentName",
    "showItemContent"
  ]),
  components: {
    BoardActivity,
    MenubarAbout,
    MenubarBackground,
    MenubarSearchCard,
    MenubarStickers,
    BackgroundColors,
    BackgroundImage
  }
})
export default class BoardMenubar extends Vue {
  @Prop(Array) private activity: Array<object> | undefined;

  toggleMenu() {
    this.$store.dispatch("toggleMenuSidebar");
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
    top: 0;
    position: sticky;
    z-index: 2;
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
      .items {
        border-radius: 5px;
        cursor: pointer;
        &:hover {
          background: rgba(128, 128, 128, 0.301);
        }
        &.disabled {
          cursor: not-allowed;
          &:hover {
            background: none;
          }
        }
        img {
          height: 25px;
        }
        span {
          font-size: 16px;
        }
        .powerup-label {
          p {
            font-size: 15px;
          }
        }
      }
    }
    .menubar-items-content {
      transform: translateX(339px);

      &.show {
        transform: translateX(0px);
        transition: all 0.4s;
      }
    }
  }
}
</style>
