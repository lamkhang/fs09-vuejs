<template>
  <div>
    <Header />
    <Carousel />
    <Promotion />
  </div>
</template>

<script>
import Header from "./header.vue";
import Carousel from "./carousel";
import Promotion from "./promotion"
export default {
  components: {
    Header,
    Carousel,
    Promotion
  }
}
</script>

<style>

</style>