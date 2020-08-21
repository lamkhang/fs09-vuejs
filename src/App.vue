<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <Baitap1 /> -->
    <!-- <Baitap2 /> -->
    <!-- <DataBinding /> -->
    <!-- <HomeWork /> -->
    <!-- <Computed /> -->
    <!-- <Directive /> -->
    <!-- <ExampleDirective /> -->
    <User />
    <BookingBus />
    <Slot />
    <FormValidation />
    <!-- <LifeCycle /> -->
    <Vuex />
  </div>
</template>

<script>
// import Baitap1 from "./baitap1";
// import Baitap2 from "./baitap2";
// import DataBinding from "./data-binding";
// import HomeWork from "./homework";
// import Computed from "./computed";
// import Directive from "./directive";
// import ExampleDirective from "./directive/example";
import User from "./components/user";
import BookingBus from "./booking-bus";
import Slot from "./slot";
import FormValidation from "./form-validation";
// import LifeCycle from "./lifecycle";
import Vuex from "./vuex";

export default {
  name: "App",
  components: {
    // Baitap1,
    // Baitap2,
    // DataBinding,
    // HomeWork,
    // Computed,
    // Directive,
    // ExampleDirective
    User,
    BookingBus,
    Slot,
    FormValidation,
    // LifeCycle,
    Vuex
  }
};
</script>

<style lang="scss">
.title {
  color: red;
}
</style>
