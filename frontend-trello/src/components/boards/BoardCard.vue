<template>
  <div class="card m-0 p-0">
    <div class="card-title m-0 p-2" @click="$bvModal.show(`card-${card.id}`)">
      <span>{{card.title}}</span>
    </div>
    <!-- Modal -->

    <b-modal :id="`card-${card.id}`" size="lg" scrollable hide-footer>
      <template v-slot:modal-title>
        <div class="d-flex">
          <img src="@/assets/icons/card-header.svg" class="mr-2" />
          <h4 class="m-0">{{card.title}}</h4>
        </div>
        <small class="text-secondary ml-4">
          In list
          <u>{{listTitle}}</u>
        </small>
      </template>
      <ModalContent></ModalContent>
    </b-modal>
  </div>
</template>

<script lang="ts">
import ModalContent from "@/components/boards/cardModal/ModalContent.vue";
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {
    ModalContent
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
  }
}
</style>
