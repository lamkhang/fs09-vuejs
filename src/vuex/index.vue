<template>
  <div class="container">
    <h3 class="title">Vuex</h3>
    <div>Counter: {{counter}}</div>
    <div class="row">
      <div class="col-sm-6"><Counter  /></div>
      <div class="col-sm-6"><Result /></div>
    </div>
  </div>
</template>

<script>
import Counter from "./counter";
import Result from "./result"
export default {
  components: {
    Counter,
    Result
  }, 
  methods: {
  },
  computed: {
    counter() {
      return this.$store.state.counter.counter;
    }
  }
  
}
</script>

<style>

</style>