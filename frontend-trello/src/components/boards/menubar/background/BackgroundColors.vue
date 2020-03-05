<template>
  <div class="row pl-4 pt-3">
    <div
      class="color col-5 mx-2 my-1"
      v-for="color in colors"
      :key="color"
      :style="`background-color:${color}`"
      @click="$store.dispatch('setBackground', {img:false, content:color})"
    ></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BackgroundColors extends Vue {
  colors = [
    "rgb(0, 121, 191)",
    "rgb(210, 144, 52)",
    "rgb(81, 152, 57)",
    "rgb(176, 70, 50)",
    "rgb(137, 96, 158)",
    "rgb(205, 90, 145)",
    "rgb(75, 191, 107)",
    "rgb(0, 174, 204)",
    "rgb(131, 140, 145)"
  ];
}
</script>

<style lang="scss" scoped>
.color {
  border-radius: 8px;
  cursor: pointer;
  height: 96px;
  width: 100%;
  &:hover {
    opacity: 0.7;
  }
}
</style>
