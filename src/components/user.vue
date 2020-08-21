<template>
  <div class="container component">
    <div class="row">
      <div class="col-sm-12">
        <h3>The User Component</h3>
        <p>I'm an awesome User!</p>
        <button class="btn btn-success" @click="name = 'Nguyen'">Change my Name</button>
        <p>Name is {{name}}</p>
        <p>Age is {{age}}</p>
        <hr />
        <div class="row">
          <div class="col-sm-6"><UserDetail :name="name" :age="age" @event-reset="resetName" /></div>
          <div class="col-sm-6"><UserEdit :name="name" :age="age" @event-edit="resetName" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./user-detail";
import UserEdit from "./user-edit";
export default {
  components: {
    UserDetail,
    UserEdit
  },
  data() {
    return {
      name: "Nguyen",
      age: 20
    }
  },
  methods: {
    resetName(name, age) {
      this.name = name;
      this.age = age;
    }
  }
};
</script>

<style scoped>
div.component {
  border: 1px solid black;
  padding: 30px;
}
div {
  background-color: lightblue;
}
</style>