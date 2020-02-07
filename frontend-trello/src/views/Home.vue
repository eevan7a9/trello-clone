<template>
  <div class="home">
    <BoardView />
  </div>
</template>

<script>
// @ is an alias to /src
import BoardView from "@/components/boards/BoardView.vue";

export default {
  name: "Home",
  components: {
    BoardView
  }
};
</script>
