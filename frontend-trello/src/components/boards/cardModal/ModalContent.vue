<template>
  <div class="card-content pl-2 pt-3 pb-4 row">
    <div class="col-md-8 left-content">
      <!-- card desc start -->
      <div class="d-flex">
        <img src="@/assets/icons/card-desc.svg" class="mr-2" />
        <h5 class="m-0">Description</h5>
      </div>
      <div class="card-desc p-2 pl-4">
        <p>
          <small>{{card.desc}}</small>
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
      <h5 class="text-muted">
        <small>ADD TO CARD</small>
      </h5>
      <b-list-group class="mb-4">
        <b-list-group-item class="mb-1 modal-list-item p-2 d-flex align-items-center">
          <img src="@/assets/icons/card-user.svg" alt="members" />
          <span class="ml-2">Members</span>
        </b-list-group-item>
        <b-list-group-item class="mb-1 modal-list-item p-2">
          <img src="@/assets/icons/card-label.svg" alt="label" />
          <span class="ml-2">Labels</span>
        </b-list-group-item>
        <b-list-group-item class="mb-1 modal-list-item p-2">
          <img src="@/assets/icons/card-checklist.svg" alt="checklist" />
          <span class="ml-2">Checklist</span>
        </b-list-group-item>
        <b-list-group-item class="mb-1 modal-list-item p-2">
          <img src="@/assets/icons/card-clock.svg" alt="clock" />
          <span class="ml-2">Due Date</span>
        </b-list-group-item>
        <b-list-group-item class="mb-1 modal-list-item p-2">
          <img src="@/assets/icons/card-paperclip.svg" alt="paperclip" />
          <span class="ml-2">Attachment</span>
        </b-list-group-item>
        <b-list-group-item class="mb-1 modal-list-item p-2">
          <img src="@/assets/icons/card-cover.svg" alt="cover" />
          <span class="ml-2">Cover</span>
        </b-list-group-item>
      </b-list-group>
      <h5 class="text-muted">
        <small>POWER-UPS</small>
      </h5>
      <b-list-group class="mb-4">
        <b-list-group-item class="mb-1 modal-list-item p-2">
          <img src="@/assets/icons/card-zap.svg" alt="members" />
          <span class="ml-2">Get Power-Ups</span>
        </b-list-group-item>
      </b-list-group>
      <h5 class="text-muted">
        <small>ACTIONS</small>
      </h5>
      <b-list-group class="mb-4">
        <b-list-group-item class="mb-1 modal-list-item p-2 d-flex align-items-center">
          <img src="@/assets/icons/card-move.svg" alt="move" />
          <span class="ml-2">Move</span>
        </b-list-group-item>
        <b-list-group-item class="mb-1 modal-list-item p-2">
          <img src="@/assets/icons/card-copy.svg" alt="copy" />
          <span class="ml-2">Copy</span>
        </b-list-group-item>
        <b-list-group-item class="mb-1 modal-list-item p-2">
          <img src="@/assets/icons/card-template.svg" alt="template" />
          <span class="ml-2">Make Template</span>
        </b-list-group-item>
        <b-list-group-item class="mb-1 modal-list-item p-2">
          <img src="@/assets/icons/card-watch.svg" alt="watch" />
          <span class="ml-2">Watch</span>
        </b-list-group-item>
        <b-list-group-item class="mb-1 modal-list-item p-2">
          <img src="@/assets/icons/card-archive.svg" alt="archive" />
          <span class="ml-2">Archive</span>
        </b-list-group-item>
        <b-list-group-item class="mb-1 modal-list-item p-2">
          <img src="@/assets/icons/card-share.svg" alt="share" />
          <span class="ml-2">Share</span>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
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
export default class BoardCardModalContent extends Vue {
  @Prop(Object) private card: object | undefined;
}
</script>

<style lang="scss" scoped>
.modal-list-item {
  background: rgba(9, 30, 66, 0.04);
  border: none;
  border-radius: 5px;
  font-size: 14px;
  color: #42526e;
  cursor: not-allowed;
  &:hover {
    background: rgba(9, 30, 66, 0.082);
  }
  img {
    height: 20px;
  }
}
</style>
