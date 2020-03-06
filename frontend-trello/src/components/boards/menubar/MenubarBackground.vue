<template>
  <div>
    <div class="d-flex justify-content-center">
      <div class="w-100 p-1 pt-3" style="cursor:pointer">
        <div
          class="image"
          style="background-image:url(https://a.trellocdn.com/prgb/dist/images/photos-thumbnail@3x.48948499e309aef794d7.jpg)"
          @click="showBackground('Photos by Unsplash', 'BackgroundImage')"
        ></div>
        <span class="font-weight-bold">Photos</span>
      </div>
      <div class="w-100 p-1 pt-3" style="cursor:pointer">
        <div
          class="image"
          style="background-image:url(https://a.trellocdn.com/prgb/dist/images/colors@2x.864f4df15d825e89e199.jpg)"
          @click="showBackground('Colors', 'BackgroundColors')"
        ></div>
        <span class="font-weight-bold">Colors</span>
      </div>
    </div>
    <!-- <img src="@/assets/under_construction.svg" class="img-fluid p-2 my-5" alt="constructing" />
    <h5 class="text-muted text-uppercase font-weight-bold">under construction</h5>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MenubarBackground extends Vue {
  colors = {
    icon: "",
    title: "Colors",
    contentOf: "BackgroundColors"
  };
  public showBackground(title: string, contentOf: string) {
    this.$store.dispatch("setMenubarContent");

    setTimeout(() => {
      this.$store.dispatch("setMenubarContent", {
        icon: "",
        title: title,
        contentOf: contentOf
      });
      this.$store.dispatch("setPreviousContent", {
        title: "change background",
        contentOf: "MenubarBackground"
      });
    }, 1);
  }
}
</script>

<style lang="scss" scoped>
.image {
  background-color: #dfe1e6;
  background-size: cover;
  border-radius: 8px;
  height: 96px;
  margin-bottom: 8px;
  width: 100%;
  &:hover {
    opacity: 0.8;
  }
}
</style>
