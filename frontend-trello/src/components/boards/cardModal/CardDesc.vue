<template>
  <div>
    <div class="d-flex align-items-center">
      <img src="@/assets/icons/card-desc.svg" class="mr-2" />
      <h5 class="m-0">Description</h5>
      <button class="edit ml-3 px-4 py-2" v-if="desc && !showInput" @click="showInput=true">Edit</button>
    </div>
    <div class="card-desc p-2 pl-4" v-if="desc && !showInput">
      <p>{{desc}}</p>
    </div>
    <div class="card-desc-empty" v-if="!desc && !showInput">
      <div class="desc-btn ml-4 mt-3" @click="showInput=true">
        <a>Add more detailed information</a>
      </div>
    </div>
    <div class="card-desc-input ml-4 mt-3" v-if="showInput">
      <textarea cols="30" rows="4" placeholder="Add more detailed information..."></textarea>
      <footer class="mt-2 d-flex align-items-center">
        <button class="btn btn-success px-4 py-2">Save</button>
        <span class="p-2 ml-1" @click="showInput=false">
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
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class CardDesc extends Vue {
  @Prop(String) private desc: string | undefined;
  showInput = false;
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
    border: 3px solid #0079bf;
    border-radius: 5px;
    width: 100%;
    padding: 5px 15px;
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
