<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me! {{name}}</p>
    <p>User age: {{age}}</p>
    <button class="btn btn-info" @click="$emit('event-edit', 'Nguyen 1', 21)">Edit age</button>
  </div>
</template>

<script>
export default {
  props: [ 'name', 'age']
};
</script>

<style scoped>
div {
  background-color: lightgreen !important;
}
</style>