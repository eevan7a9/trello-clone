<template>
  <div id="app" :style="boardBackground">
    <NavbarTop />
    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavbarTop from "@/components/NavbarTop.vue";
import { mapGetters } from "vuex";
@Component({
  computed: {
    ...mapGetters(["boardBackground"])
  },
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
  background-position: 50%;
  position: relative;
  background-size: cover;
}
</style>
