<template>
  <Nav></Nav>
  <h1>Hello App!</h1>
  <router-view></router-view>
</template>

<script>
import Nav from "../components/Nav.vue";

export default {
  components: {
    Nav,
  },
};
</script>