<template>
  <div class="row pl-4 pt-3">
    <div
      class="image col-5 mx-2 my-1"
      v-for="image in images"
      :key="image.thumb"
      :style="`background-image:url(${image.thumb})`"
      @click="$store.dispatch('setBackground', {img:true, content:image.photo})"
    ></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BackgroundImage extends Vue {
  images = [
    {
      photo:
        "https://images.unsplash.com/photo-1583413834646-35067f6ec488?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      thumb:
        "https://images.unsplash.com/photo-1583413834646-35067f6ec488?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    {
      photo:
        "https://images.unsplash.com/photo-1583330887598-e008685c1599?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      thumb:
        "https://images.unsplash.com/photo-1583330887598-e008685c1599?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    {
      photo:
        "https://images.unsplash.com/photo-1583346269884-792add99b824?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
      thumb:
        "https://images.unsplash.com/photo-1583346269884-792add99b824?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    {
      photo:
        "https://images.unsplash.com/photo-1583354838252-2ed5c78ba103?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      thumb:
        "https://images.unsplash.com/photo-1583354838252-2ed5c78ba103?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    },
    {
      photo:
        "https://images.unsplash.com/photo-1583376775754-670ad736bd7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
      thumb:
        "https://images.unsplash.com/photo-1583376775754-670ad736bd7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80"
    },
    {
      photo:
        "https://images.unsplash.com/photo-1527901031195-a21e7b21052c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1490&q=80",
      thumb:
        "https://images.unsplash.com/photo-1527901031195-a21e7b21052c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80"
    },
    {
      photo:
        "https://images.unsplash.com/photo-1583310731725-d61878ba2220?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      thumb:
        "https://images.unsplash.com/photo-1583310731725-d61878ba2220?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
    }
  ];
}
</script>

<style lang="scss" scoped>
.image {
  border-radius: 8px;
  cursor: pointer;
  height: 96px;
  width: 100%;
  &:hover {
    opacity: 0.7;
  }
}
</style>
