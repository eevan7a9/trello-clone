<template>
  <div>
    <!-- hedear starts -->
    <header class="d-flex justify-content-between align-items-center">
      <h6 class="m-0 font-weight-bold py-2">{{list.title}}</h6>
      <span>
        <img src="@/assets/icons/more-horizontal-dark.svg" alt="star" class="mr-2" />
      </span>
    </header>
    <!-- header ends -->
    {{list.cards}}
    <!-- footer starts -->
    <footer class="add-card px-1 py-2">
      <span>
        <img src="@/assets/icons/plus-dark.svg" alt="star" class="mr-2" />
      </span>
      <span>Add another card</span>
    </footer>
    <!-- footer ends -->
  </div>
</template>
<script>
export default {
  props: {
    list: Object
  }
};
</script>


<style lang="scss" scoped>
div {
  header {
    cursor: pointer;
    span {
      img {
        height: 15px;
      }
    }
  }
  .add-card {
    cursor: pointer;
    span {
      color: grey;

      img {
        height: 18px;
      }
    }
    &:hover {
      background: #9e9fa344;
      border-radius: 5px;
      span {
        color: #333;
      }
    }
  }
}
</style>
