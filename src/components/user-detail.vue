<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Detail</p>
    <p>User name: {{name}}</p>
    <p>User age: {{age}}</p>
    <button class="btn btn-info mr-3" @click="$emit('event-reset', 'Nguyen 2', '22')">Reset name</button>
  </div>
</template>

<script>
export default {
  props: ['name', 'age']
};
</script>

<style scoped>
div {
  background-color: lightcoral !important;
}
</style>