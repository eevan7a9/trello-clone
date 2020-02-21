<template>
  <div v-if="card.members.length > 0">
    <h6 class="m-0 pl-4 text-uppercase text-muted">Members</h6>
    <div class="card-members d-flex pl-4 mb-4 mt-1">
      <button
        v-for="(member, index) in card.members"
        :key="index"
        class="card-header-btn font-weight-bold p-1 d-flex justify-content-center align-items-center mr-1"
        :style="`background:${member.bg}; color: ${member.color}`"
      >{{ member.name[0] }}</button>
      <button
        class="card-header-btn font-weight-bold p-1 d-flex justify-content-center align-items-center"
        :style="`background:#f4f5f7; color: white`"
      >
        <img src="@/assets/icons/plus-dark.svg" alt />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CardMembers extends Vue {
  @Prop(Object) private card: object | undefined;
}
</script>

<style  lang="scss" scoped>
.card-members {
  .card-header-btn {
    background: hsla(0, 0%, 100%, 0.3);
    border-radius: 100%;
    border: 0px solid;
    font-size: 14px;
    height: 29px;
    width: 29px;
  }
}
</style>
