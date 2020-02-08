<template>
  <div class="home pt-5">
    <BoardHeader />
    <BoardView class="mt-5" />
  </div>
</template>

<script>
// @ is an alias to /src
import BoardView from "@/components/boards/BoardView.vue";
import BoardHeader from "@/components/boards/BoardHeader.vue";
export default {
  name: "Home",
  components: {
    BoardHeader,
    BoardView
  }
};
</script>
<style lang="scss" scoped>
.home {
  height: 100vh;
}
</style>