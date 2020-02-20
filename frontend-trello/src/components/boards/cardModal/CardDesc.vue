<template>
  <div>
    <div class="d-flex">
      <img src="@/assets/icons/card-desc.svg" class="mr-2" />
      <h5 class="m-0">Description</h5>
    </div>
    <div class="card-desc p-2 pl-4">
      <p>
        <small>{{desc}}</small>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CardDesc extends Vue {
  @Prop(String) private desc: string | undefined;
}
</script>

<style scoped>
</style>
