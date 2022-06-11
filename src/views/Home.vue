<template>
<h1>Hello App!</h1>
  <Nav></Nav>
  <router-view></router-view>
</template>

<script>
import Nav from '../components/Nav.vue';

export default {
  components: {
    Nav
  }
}
</script>