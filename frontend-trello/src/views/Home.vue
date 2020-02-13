<template>
  <div class="home d-flex flex-column">
    <BoardHeader />
    <div class="main-board">
      <BoardContent class="mt-5" />
    </div>
    <BoardMenubar class="sidebar-board" />
  </div>
</template>

<script>
// @ is an alias to /src
import BoardContent from "@/components/boards/BoardContent.vue";
import BoardHeader from "@/components/boards/BoardHeader.vue";
import BoardMenubar from "@/components/boards/menubar/BoardMenubar.vue";
export default {
  name: "Home",
  components: {
    BoardHeader,
    BoardContent,
    BoardMenubar
  }
};
</script>
<style lang="scss" scoped>
.home {
  // navbar height is 50px
  height: calc(100vh - 53px);
  overflow: hidden;
  .main-board {
    overflow-y: hidden;
    overflow-x: auto;
    height: 100%;
    background: red;
  }
}
</style>