<template>
  <nav class="text-light d-flex justify-content-between align-items-center">
    <ul class="d-flex align-items-center m-0">
      <router-link to="/" class="p-1">
        <img src="@/assets/icons/home.svg" alt="home" />
      </router-link>

      <a class="text-light font-weight-bold p-1 m-1">
        <img src="@/assets/icons/trello.svg" alt="home" />
        <span class="px-2">Boards</span>
      </a>
    </ul>

    <div class="brand d-flex justify-content-center align-items-center">
      <img src="@/assets/icons/trello.svg" alt="app" />
      <span class="brand-title">Trello</span>
    </div>
    <ul class="d-flex align-items-center p-2 m-0">
      <li class="pl-1">
        <BoardCreate></BoardCreate>
      </li>
      <li class="pl-1">
        <BoardInfo></BoardInfo>
      </li>
      <li class="pl-1">
        <BoardNotification></BoardNotification>
      </li>
      <li class="p-1 user-icon ml-1 bg-light d-flex align-items-center justify-content-center">
        <span class="text-primary font-weight-bold">E</span>
      </li>
    </ul>
  </nav>
</template>

<script>
import BoardCreate from "@/components/boards/buttons/BoardCreate.vue";
import BoardInfo from "@/components/boards/buttons/BoardInfo.vue";
import BoardNotification from "@/components/boards/buttons/BoardNotification.vue";
export default {
  components: {
    BoardCreate,
    BoardInfo,
    BoardNotification
  }
};
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  z-index: 1;
  width: 100%;
  background: rgba(0, 0, 0, 0.32);
  ul {
    list-style: none;
    a {
      border-radius: 5px;
      background: hsla(0, 0%, 100%, 0.3);
      &:hover {
        text-decoration: none;
      }
    }
    .nav-list-item {
      border-radius: 5px;
      background: hsla(0, 0%, 100%, 0.3);
      &.user-icon {
        border-radius: 50%;
        width: 35px;
        height: 35px;
      }
    }
  }
  div {
    .brand-title {
      font-family: "Lobster", cursive;
      font-size: 23px;
    }
  }
}
</style>