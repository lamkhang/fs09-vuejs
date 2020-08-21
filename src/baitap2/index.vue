<template>
  <div>
    <Header />
    <Carousel />
    <div class="container">
      <div class="row">
        <WhatWeDo />
        <Contact />
      </div>
    </div>
    <ListCard />
    <Footer />
  </div>
</template>

<script>
import Header from "./header";
import Carousel from "./carousel";
import WhatWeDo from "./what-we-do";
import Contact from "./contact";
import ListCard from "./list-card";
import Footer from "./footer";
export default {
  components: {
    Header,
    Carousel,
    WhatWeDo, 
    Contact,
    ListCard,
    Footer
  }
}
</script>

<style>

</style>