<template>
  <div>
    <h3 class="title">Result</h3>
    <div>counter : {{doubleCounter}}</div>
    <div>stringCounter: {{stringCounter}}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["doubleCounter", "stringCounter"])
    // counter() {
    //   return this.$store.getters.doubleCounter;
    // },
    // stringCounter() {
    //   return this.$store.getters.stringCounter;
    // }
  }
}
</script>

<style>

</style>