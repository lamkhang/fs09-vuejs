<template>
  <div>
    <h3 class="title">*Data binding</h3>
    <p>{{name}}</p>
    <img :src="urlImg" width="100px">
    <p>
      <span v-html="rawHTML"></span>
    </p>
    <div>
      <input type="text" v-model="name" ref="thamso">
      <p>{{name}}</p>
      <button class="btn btn-success" v-on:click="eventBinding($refs.thamso.value)">Click</button>
    </div>
    <Example />
  </div>
</template>

<script>
import Example from "./example";
export default {
  components: {
    Example
  },
  data() {
    return {
      name: "Cybersoft",
      urlImg: "./img/logo.png",
      rawHTML: "<a href='https://www.google.com.vn/'>Google</a>"
    };
  },
  methods: {
    eventBinding(value) {
      console.log(value);
    }
  }
}
</script>

<style>

</style>