<template>
  <nav class="p-2">
    <div class="board-title float-left font-weight-bold text-light ml-4 px-3">My Projects</div>
    <div class="float-left text-light d-flex justify-content-center align-items-center mr-3">
      <BoardStared></BoardStared>
    </div>
    <div class="float-left text-light d-flex justify-content-center align-items-center mr-3">
      <BoardPartOf></BoardPartOf>|
    </div>
    <div class="float-left text-light d-flex justify-content-center align-items-center mr-3">
      <BoardVisibility></BoardVisibility>|
    </div>
    <div class="float-left text-light d-flex justify-content-center align-items-center mr-3">
      <BoardInvite :members="board.members"></BoardInvite>
    </div>
    <div class="float-right text-light d-flex justify-content-center align-items-center mr-3">
      <BoardMenu></BoardMenu>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import BoardVisibility from "@/components/boards/buttons/BoardVisibility.vue";
import BoardPartOf from "@/components/boards/buttons/BoardPartOf.vue";
import BoardStared from "@/components/boards/buttons/BoardStared.vue";
import BoardInvite from "@/components/boards/buttons/BoardInvite.vue";
import BoardMenu from "@/components/boards/buttons/BoardMenu.vue";
@Component({
  components: {
    BoardVisibility,
    BoardPartOf,
    BoardStared,
    BoardInvite,
    BoardMenu
  }
})
export default class BoardHeader extends Vue {
  @Prop(Object) private board: object | undefined;
}
</script>

<style lang="scss" scoped>
nav {
  width: 100vw;
  .board-title {
    background: transparent;
    font-size: 18px;
    line-height: 32px;
    text-decoration: none;
    max-width: calc(100% - 24px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
