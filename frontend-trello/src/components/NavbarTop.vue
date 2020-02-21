<template>
  <nav class="text-light d-flex justify-content-between align-items-center">
    <ul class="d-flex align-items-center m-0">
      <router-link to="/" class="p-1">
        <img src="@/assets/icons/home.svg" alt="home" />
      </router-link>

      <li class="ml-1 mt-1">
        <BoardList></BoardList>
      </li>
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
      <li class="pl-1">
        <BoardAccount></BoardAccount>
      </li>
    </ul>
  </nav>
</template>

<script>
import BoardList from "@/components/boards/buttons/BoardList.vue";
import BoardCreate from "@/components/boards/buttons/BoardCreate.vue";
import BoardInfo from "@/components/boards/buttons/BoardInfo.vue";
import BoardNotification from "@/components/boards/buttons/BoardNotification.vue";
import BoardAccount from "@/components/boards/buttons/BoardAccount.vue";
export default {
  components: {
    BoardList,
    BoardCreate,
    BoardInfo,
    BoardNotification,
    BoardAccount
  }
};
</script>

<style lang="scss" scoped>
nav {
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 50px;
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