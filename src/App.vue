<template>
  <title>MoneyBuddy</title>
  <div
    class="inline-flex flex-col justify-between items h-screen w-screen z-50"
  >
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