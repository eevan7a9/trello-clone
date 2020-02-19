<template>
  <div class="card-content pl-2 pt-3 row">
    <div class="col-md-8 left-content">
      <!-- card desc start -->
      <div class="d-flex">
        <img src="@/assets/icons/card-desc.svg" class="mr-2" />
        <h5 class="m-0">Description</h5>
      </div>
      <div class="card-desc p-2 pl-4">
        <p>
          <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum nesciunt delectus veritatis atque officia adipisci voluptate labore, debitis distinctio doloremque?</small>
        </p>
      </div>
      <!-- card desc end -->
      <!-- card activity start -->
      <div class="d-flex">
        <img src="@/assets/icons/card-list.svg" class="mr-2" />
        <h5 class="m-0">Activity</h5>
      </div>
      <div class="card-activity p-2 pl-4">
        <input
          type="text"
          class="form-control"
          name
          id
          aria-describedby="helpId"
          placeholder="Write a comment..."
        />
      </div>
      <!-- card activity ends -->
    </div>
    <div class="col-md-4">
      <h1>side</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BoardVisibility from "@/components/boards/buttons/BoardVisibility.vue";
import BoardPartOf from "@/components/boards/buttons/BoardPartOf.vue";
import BoardStared from "@/components/boards/buttons/BoardStared.vue";
import BoardInvite from "@/components/boards/buttons/BoardInvite.vue";
import BoardMenu from "@/components/boards/buttons/BoardMenu.vue";
@Component({
  components: {
    BoardVisibility,
    BoardPartOf,
    BoardStared,
    BoardInvite,
    BoardMenu
  }
})
export default class BoardCardModalContent extends Vue {}
</script>

<style lang="scss" scoped>
</style>
