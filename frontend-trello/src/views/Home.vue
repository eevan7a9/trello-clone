<template>
  <div class="home pt-5">
    <div class="main-board">
      <BoardHeader />
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
  display: grid;
  grid-template-columns: 1fr auto;
  height: 100vh;
}
</style>