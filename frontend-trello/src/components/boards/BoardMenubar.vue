<template>
  <div class="side-menubar" :class="{'active' : sidebarStatus}">
    <h1>Side Menubar</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
  computed: mapGetters(["sidebarStatus"])
})
export default class BoardMenubar extends Vue {}
</script>

<style lang="scss" scoped>
.side-menubar {
  display: none;
  &.active {
    display: block;
  }
}
</style>
