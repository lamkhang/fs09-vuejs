<template>
<div>
  <h3 class="title">lifecycle</h3>
  <div>User name: {{username}}</div>
  <button class="btn btn-success" @click="username='Cybercore'">Click</button>
</div>
  
</template>

<script>
export default {
  data() {
    return {
      username: "Cybersoft"
    }
  },
  beforeCreate() {
    console.log("beforeCreate", this.username);
  },
  created() {
    console.log("created", this.username);
  },
  beforeMount() {
    console.log("beforeMount", this.$el)
  },
  mounted() {
    console.log("mounted", this.$el)
  }, 
  beforeUpdate() {
    console.log("beforeUpdate", this.$el.innerHTML);
  },
  updated() {
    console.log("updated", this.$el.innerHTML);
  },
  beforeDestroy() {
    console.log("beforeDestroy");
  }, 
  destroyed() {
    console.log("destroyed");
  }
}
</script>

<style>

</style>