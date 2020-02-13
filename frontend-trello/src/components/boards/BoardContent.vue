<template>
  <div class="content-wrapper text-left">
    <div class="lists-container d-flex">
      <div class="p-2 bg-light mx-2" id="listItem" v-for="list of lists" :key="list.id">
        <h1>{{list.title}}</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Board extends Vue {
  lists = [
    {
      id: 1,
      title: "List One",
      cards: []
    },
    {
      id: 2,
      title: "List Two",
      cards: []
    },
    {
      id: 3,
      title: "List Three",
      cards: []
    },
    {
      id: 4,
      title: "List Four",
      cards: []
    },
    {
      id: 5,
      title: "List Five",
      cards: []
    },
    {
      id: 6,
      title: "List six",
      cards: []
    },
    {
      id: 7,
      title: "List seven",
      cards: []
    },
    {
      id: 8,
      title: "List eight",
      cards: []
    },
    {
      id: 9,
      title: "List Nine",
      cards: []
    },
    {
      id: 10,
      title: "List Ten",
      cards: []
    },
    {
      id: 11,
      title: "List eleven",
      cards: []
    },
    {
      id: 12,
      title: "List twelve",
      cards: []
    }
  ];
}
</script>

<style lang="scss" scoped>
.content-wrapper {
  background: red;
  width: 100vw;
  // overflow-x: scroll;
}
.lists-container {
  max-height: 100vh;
  width: 700px;
  width: 100%;
  white-space: nowrap;

  #listITem {
    display: inline-block;
    width: 400px;
  }
}
</style>
