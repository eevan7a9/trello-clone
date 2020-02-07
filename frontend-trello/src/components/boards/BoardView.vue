<template>
  <div>
    <BoardHeader />
    <h1>Current board</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import BoardHeader from "@/components/boards/BoardHeader.vue";
@Component({
  components: {
    BoardHeader
  }
})
export default class Board extends Vue {}
</script>

<style lang="scss" scoped>
</style>
