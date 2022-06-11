<template>
<h1>register page</h1>
  <Nav></Nav>
  <form @submit.prevent="register">
    <div>
      <label for="username">username</label>
      <input name="username" v-model="username" placeholder="username">
    </div>
    <div>
      <label for="password">password</label>
      <input name="password" v-model="password" placeholder="password" type="password">
    </div>
    <input type="submit" value="register">
  </form>
</template>

<script>
import Nav from '../components/Nav.vue';

export default {
  name: 'Register',
  data() {
    return {
      username: "",
      password: "",
      email: "", // Optional
    };
  },
  methods: {
    async register() {
      const {username, password} = this;
      const res = await fetch(
        "http://127.0.0.1:8000/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username,
            password,
          })
        }
      );
      const data = await res.json();
      console.log(data);
    }
  },
  components: {
    Nav
  }
}
</script>