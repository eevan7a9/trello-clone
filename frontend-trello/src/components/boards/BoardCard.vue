<template>
  <div class="bg-light m-0 p-2">
    <div class="card-title m-0 p-0">
      <span>{{card.title}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class BoardCard extends Vue {
  @Prop(Object) private card: object | undefined;
}
</script>

<style lang="scss" scoped>
div {
  .card-title {
    font-size: 14px;
  }
}
</style>
