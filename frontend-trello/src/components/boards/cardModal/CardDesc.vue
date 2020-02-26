<template>
  <div>
    <div class="d-flex align-items-center">
      <img src="@/assets/icons/card-desc.svg" class="mr-2" />
      <h5 class="m-0">Description</h5>
      <button class="edit ml-3 px-4 py-2" v-if="card.desc && !isShowEdit" @click="enableEdit">Edit</button>
    </div>
    <div class="card-desc p-2 pl-4" @click="enableEdit" v-if="card.desc && !isShowEdit">
      <p>{{card.desc}}</p>
    </div>
    <div class="card-desc-empty" v-if="!card.desc && !isShowEdit">
      <div class="desc-btn ml-4 mt-3" @click="enableEdit">
        <a>Add more detailed information</a>
      </div>
    </div>
    <div class="card-desc-input ml-4 mt-3" v-if="isShowEdit">
      <textarea
        ref="editDesc"
        cols="30"
        rows="4"
        :value="card.desc"
        @blur="hideEdit"
        placeholder="Add more detailed information..."
      ></textarea>
      <footer class="mt-2 d-flex align-items-center">
        <button class="btn btn-success px-4 py-2" @click="hideEdit">Save</button>
        <span class="p-2 ml-1" @click="isShowEdit=false">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </span>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Ref, Vue } from "vue-property-decorator";

@Component
export default class CardDesc extends Vue {
  @Ref() readonly editDesc!: HTMLInputElement;

  @Prop(Object) private card!: { id: number; listId: number; desc: string };

  isShowEdit = false;

  public enableEdit(): void {
    this.isShowEdit = true;
    this.$nextTick(() => {
      this.editDesc.focus();
    });
  }
  public hideEdit(): void {
    // this.desc = this.editDesc.value;0
    this.$store.commit("updateCardDesc", {
      cardId: this.card.id,
      listId: this.card.listId,
      desc: this.editDesc.value
    });
    this.isShowEdit = false;
  }
}
</script>

<style lang="scss" scoped>
.edit {
  background-color: rgba(9, 30, 66, 0.04);
  box-shadow: none;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: rgba(9, 30, 66, 0.08);
  }
}
.card-desc {
  cursor: pointer;
}
.card-desc-empty {
  .desc-btn {
    background: rgba(9, 30, 66, 0.04);
    height: 60px;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background: rgba(9, 30, 66, 0.08);
    }
    a {
      color: #172b4d;
    }
  }
}
.card-desc-input {
  textarea {
    background: #fff;

    border-radius: 5px;
    width: 100%;
    padding: 5px 15px;
    &:focus {
      border: 3px solid #0079bf;
    }
  }
  span {
    svg {
      cursor: pointer;
      color: grey;
      &:hover {
        color: #333;
      }
    }
  }
}
</style>
