<template>
  <div class="row">
    <div class="col-sm-5 mx-auto">
      <div class="form-group">
        <label>Email</label>
        <input type="text" class="form-control" v-model="email" />
      </div>
      <div class="form-group">
        <label>Fullname</label>
        <input type="text" class="form-control" ref="name" />
      </div>
      <button class="btn btn-success" v-on:click="eventSubmit($refs.name.value)">Submit</button>
      <p>Email: {{email}}</p>
      <p>Fullname: {{fullname}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      fullname: ""
    };
  },
  methods: {
    eventSubmit(data) {
      this.fullname = data;
    }
  }
}
</script>

<style>

</style>