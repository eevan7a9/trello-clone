<template>
  <div class="home pt-5">
    <div class="main-board">
      <BoardHeader />
      <BoardView class="mt-5" />
    </div>
    <BoardMenubar class="sidebar-board" />
  </div>
</template>

<script>
// @ is an alias to /src
import BoardView from "@/components/boards/BoardView.vue";
import BoardHeader from "@/components/boards/BoardHeader.vue";
import BoardMenubar from "@/components/boards/BoardMenubar.vue";
export default {
  name: "Home",
  components: {
    BoardHeader,
    BoardView,
    BoardMenubar
  }
};
</script>
<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-columns: 1fr auto;
  height: 100vh;
}
</style>