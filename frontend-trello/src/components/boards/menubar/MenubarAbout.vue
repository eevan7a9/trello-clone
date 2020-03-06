<template>
  <div class="px-3">
    <header class="p-3 d-flex align-items-center">
      <span class="pr-3">
        <img src="@/assets/icons/user.svg" class="m-0 p-0" alt="user" srcset />
      </span>
      <h6 class="font-weight-bold p-0 m-0">Made By</h6>
    </header>
    <div class="row px-3">
      <div class="col-3 pt-2">
        <button class="icon-user bg-primary font-weight-bold text-light">E</button>
      </div>
      <div class="user-info col-9 text-left">
        <h6 class="font-weight-bold m-0">Evan</h6>
        <h6 class="text-muted m-0">
          <small>@evanmarc</small>
        </h6>
        <p class="text-muted m-0">Still Human</p>
        <h5 class="text-muted m-0">
          <small>
            <u>Edit Profile Info</u>
          </small>
        </h5>
      </div>
    </div>
    <header class="p-3 mt-2 d-flex align-items-center">
      <span class="pr-3">
        <img src="@/assets/icons/card-desc.svg" class="m-0 p-0" alt="user" srcset />
      </span>
      <h6 class="font-weight-bold p-0 m-0">Description</h6>
    </header>
    <div class="description">
      <p
        class="p-2 pb-3 text-left"
      >It’s your board’s time to shine! Let people know what this board is used for and what they can expect to see.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MenubarAbout extends Vue {}
</script>

<style lang="scss" scoped>
header {
  color: #42526e;
  img {
    height: 23px;
  }
  h6 {
    font-size: 18px;
  }
}
.icon-user {
  background: hsla(0, 0%, 100%, 0.3);
  border-radius: 100%;
  border: 0px solid;
  height: 45px;
  width: 45px;
}
.description {
  p {
    background-color: rgba(9, 30, 66, 0.04);
    font-size: 14px;
    cursor: pointer;
    &:hover {
      background-color: rgba(9, 30, 66, 0.103);
      color: rgb(27, 1, 87);
    }
  }
}
</style>
