<template>
  <div id="app">
    <NavbarTop />
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavbarTop from "@/components/NavbarTop.vue";
@Component({
  components: {
    NavbarTop
  }
})
export default class ComponentName extends Vue {}
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Lobster&display=swap");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url(https://cdn.pixabay.com/photo/2020/02/02/19/55/channel-4814014_960_720.jpg);
  background-position: 50%;
  position: relative;
  background-size: cover;
}
</style>
