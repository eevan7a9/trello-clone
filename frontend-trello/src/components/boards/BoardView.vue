<template>
  <div class="text-left">
    <div class="lists-container">
      <h1>Current board</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Board extends Vue {}
</script>

<style lang="scss" scoped>
.lists-container {
  background: red;
  max-height: 100vh;
}
</style>
