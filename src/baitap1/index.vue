<template>
  <div>
    <Header />
    <div class="contents">
      <Sidebar />
      <Content />
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "./header";
import Sidebar from "./sidebar";
import Content from "./content";
import Footer from "./footer";
export default {
  components: {
    Header,
    Sidebar,
    Content,
    Footer
  }
}
</script>

<style>
  .contents {
    display: flex;
  }
</style>