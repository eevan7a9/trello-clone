<template>
  <div>
    <div class="d-flex mt-3">
      <img src="@/assets/icons/card-list.svg" class="mr-2" />
      <h5 class="m-0">Activity</h5>
    </div>
    <div class="card-activity p-2 pl-4">
      <input
        type="text"
        class="form-control"
        aria-describedby="helpId"
        placeholder="Write a comment..."
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CardActivity extends Vue {}
</script>

<style scoped>
</style>
