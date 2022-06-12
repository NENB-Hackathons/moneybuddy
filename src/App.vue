<template>
  <div class="inline-flex flex-col justify-center items h-screen w-screen">
    <Nav></Nav>
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
export default {
  components: {
    Nav,
    Footer,
  },
};
</script>