<template>
  <title>MoneyBuddy</title>
  <div
    class="inline-flex flex-col justify-between items h-screen w-screen z-50"
  >
    <Questionaire v-if="!this.$store.state.modalStage"></Questionaire>
    <Nav></Nav>
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
import Questionaire from "./components/Questionaire.vue";
export default {
  components: {
    Nav,
    Footer,
    Questionaire,
  },
};
</script>