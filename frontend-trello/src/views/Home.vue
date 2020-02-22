<template>
  <div class="home d-flex flex-column">
    <BoardHeader :board="getCurrentBoard" />
    <div class="main-board" v-dragscroll:nochilddrag>
      <BoardContent />
    </div>
    <BoardMenubar :activity="getCurrentBoard.activity" class="sidebar-board" />
  </div>
</template>

<script>
// @ is an alias to /src
import { dragscroll } from "vue-dragscroll";
import BoardContent from "@/components/boards/BoardContent.vue";
import BoardHeader from "@/components/boards/BoardHeader.vue";
import BoardMenubar from "@/components/boards/menubar/BoardMenubar.vue";
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {
    BoardHeader,
    BoardContent,
    BoardMenubar
  },
  directives: {
    dragscroll
  },
  computed: {
    ...mapGetters(["getCurrentBoard"])
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
  }
}
.grab-bing {
  cursor: -webkit-grab;
  cursor: -moz-grab;
  cursor: -o-grab;
  cursor: grab;
}

.grab-bing:active {
  cursor: -webkit-grabbing;
  cursor: -moz-grabbing;
  cursor: -o-grabbing;
  cursor: grabbing;
}
</style>