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
      <BoardInvite></BoardInvite>
    </div>
    <div class="float-right text-light d-flex justify-content-center align-items-center mr-3">
      <span class="board-header-btn p-2 d-flex justify-content-center align-items-center mr-2">
        <img src="@/assets/icons/more-horizontal.svg" alt="star" class="mr-2" /> Show Menu
      </span>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BoardVisibility from "@/components/boards/buttons/BoardVisibility.vue";
import BoardPartOf from "@/components/boards/buttons/BoardPartOf.vue";
import BoardStared from "@/components/boards/buttons/BoardStared.vue";
import BoardInvite from "@/components/boards/buttons/BoardInvite.vue";
@Component({
  components: {
    BoardVisibility,
    BoardPartOf,
    BoardStared,
    BoardInvite
  }
})
export default class BoardHeader extends Vue {}
</script>

<style lang="scss" scoped>
nav {
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
  .board-header-btn {
    background-color: rgba(0, 0, 0, 0.219);
    border-radius: 5px;
    img {
      height: 20px;
      width: 20px;
    }
  }
}
</style>
