<template>
  <div class="container">
    <h3>Counter</h3>
    <button class="btn btn-info mr-4" @click="increment(1)">Inc</button>
    <button class="btn btn-danger" @click="decrement(1)">Dec</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import * as type from "./../store/types";
export default {
  methods: {
    // increment() {
    //   this.$store.dispatch("increment", 1); //dispatch methods to action
    // },
    // decrement() {
    //   this.$store.dispatch("decrement", 1); //dispatch methods to action
    // }
    // ...mapActions(["increment", "decrement"])
    ...mapActions({
      //key in method btn click
      increment: type.COUNTER_INCREMENT,
      decrement: type.COUNTER_DECREMENT

    })
  }
}
</script>

<style>

</style>