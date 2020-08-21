<template>
  <div class="container">
    <h3 class="title">Form validation</h3>
    <div class="row">
      <div class="col-sm-8">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" class="form-control" placeholder="" v-model="name" @blur="$v.name.$touch()" >
            <p class="alert alert-danger" v-if="$v.name.$dirty && !$v.name.required">name is not empty</p>
            <p class="alert alert-danger" v-if="$v.name.$dirty && !$v.name.minLength">name must be more {{$v.name.$params.minLength.min}} character</p>
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input type="text" name="age" id="age" class="form-control" placeholder="" v-model="age" @blur="$v.age.$touch()">
            <p class="alert alert-danger" v-if="$v.age.$dirty && !$v.age.between">{{$v.age.$params.between.min}} -- {{$v.age.$params.between.max}}</p>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" class="form-control" placeholder="" v-model="email" @blur="$v.email.$touch()">
            <p class="alert alert-danger" v-if="$v.email.$dirty && !$v.email.required">email is required</p>
            <p class="alert alert-danger" v-if="$v.email.$dirty && !$v.email.email">Email is not format</p>
          </div>
          <button type="submit" class="btn-primary" :disabled="$v.$invalid" >Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, between, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      name: '',
      age: 0,
      email: ''
    }
  }, 
  methods: {
    handleSubmit() {
      console.log(this.name, this.age, this.email)
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
      
    }, 
    age: {
      between: between(10, 20)
    }, 
    email: {
      required,
      email

    }
  }
}
</script>

<style>

</style>