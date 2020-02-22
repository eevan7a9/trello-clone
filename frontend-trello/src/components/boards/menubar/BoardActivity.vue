<template>
  <div>
    <div class="header-activity text-left">
      <img src="@/assets/icons/card-list.svg" class="m-2" />
      <span class="text-capitalize font-weight-bold text-dark">Activity</span>
    </div>
    <div
      class="activity-items my-4 d-flex"
      v-for="(activity, index) in getBoardActivity"
      :key="index"
    >
      <button
        class="member-icon font-weight-bold p-1 d-flex justify-content-center align-items-center"
        :style="`background:${activity.user.bg}; color: ${activity.user.color}`"
      >{{activity.user.name[0]}}</button>
      <div class="info-container ml-2 d-flex flex-column w-100 text-left">
        <h6 class="m-0 p-0">
          <span class="font-weight-bold">{{activity.user.name}}</span>
          {{activity.content}}
        </h6>
        <p class="text-muted m-0 p-0">Date 12/32/32</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
  computed: {
    ...mapGetters(["getBoardActivity"])
  }
})
export default class BoardActivity extends Vue {}
</script>

<style lang="scss" scoped>
.header-activity {
  border-radius: 5px;
  cursor: not-allowed;

  img {
    height: 18px;
  }
  span {
    font-size: 16px;
  }
}
.activity-items {
  .member-icon {
    border-radius: 100%;
    border: 0px solid;
    font-size: 14px;
    height: 35px;
    width: 40px;
  }
  .info-container {
    color: #172b4d;
    h6 {
      font-size: 15px;
    }
  }
}
</style>
