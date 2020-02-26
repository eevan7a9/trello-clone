<template>
  <div class="card m-0 p-0">
    <div class="card-title m-0 p-2" @click="$bvModal.show(`card-${card.id}`)">
      <span>{{card.title}}</span>
      <footer class>
        <div class="card-misc float-left">
          <img src="@/assets/icons/card-watch.svg" class="mr-1" alt="watched" v-if="card.watch" />
          <img src="@/assets/icons/card-desc-thin.svg" class="mr-1" alt="watched" v-if="card.desc" />
        </div>
        <div class="card-owners float-right d-flex">
          <button
            v-for="(member, index) in card.members"
            :key="index"
            class="board-header-btn font-weight-bold p-1 d-flex justify-content-center align-items-center mr-1"
            :style="`background:${member.bg}; color: ${member.color}`"
          >{{ member.name[0] }}</button>
        </div>
      </footer>
    </div>
    <!-- Modal -->

    <b-modal
      :id="`card-${card.id}`"
      size="lg"
      header-bg-variant="light"
      body-bg-variant="light"
      scrollable
      hide-footer
      header-border-variant="light"
    >
      <template v-slot:modal-title>
        <div>
          <div class="d-flex">
            <img src="@/assets/icons/card-header.svg" class="mr-2" />
            <CardTitle :card="card"></CardTitle>
          </div>
          <small class="text-secondary ml-4 my-0 p-0">
            In list
            <u>{{listTitle}}</u>
          </small>
        </div>
      </template>
      <ModalContent :card="card"></ModalContent>
    </b-modal>
  </div>
</template>

<script lang="ts">
import ModalContent from "@/components/boards/cardModal/ModalContent.vue";
import CardTitle from "@/components/boards/cardModal/CardTitle.vue";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {
    ModalContent,
    CardTitle
  }
})
export default class BoardCard extends Vue {
  @Prop(Object) private card: object | undefined;
  @Prop(String) private listTitle: string | undefined;
}
</script>

<style lang="scss" scoped>
.card {
  background: #fff;
  &:hover {
    background: rgb(247, 243, 243);
  }
  .card-title {
    font-size: 14px;
    .card-misc {
      img {
        height: 15px;
      }
    }
    .card-owners {
      .board-header-btn {
        background: hsla(0, 0%, 100%, 0.3);
        border-radius: 100%;
        border: 0px solid;
        font-size: 14px;
        height: 29px;
        width: 29px;
      }
    }
  }
}
</style>
