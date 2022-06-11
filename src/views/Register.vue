<template >
<div class="bg-gray-900 text-white flex flex-col h-screen" >
  <h1>register page</h1>
  <form @submit.prevent="register">
    <div>
      <label for="username">username</label>
      <input name="username" v-model="username" placeholder="username" class="text-black" />
    </div>
    <div>
      <label for="password">password</label>
      <input
        name="password"
        v-model="password"
        placeholder="password"
        type="password"
        class="text-black"
      />
    </div>
    <input type="submit" value="register" />
  </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      email: "", // Optional
    };
  },
  methods: {
    async register() {
      const { username, password } = this;
      const res = await fetch("http://127.0.0.1:8000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await res.json();
      console.log(data);
    },
  },
  components: {
  },
};
</script>