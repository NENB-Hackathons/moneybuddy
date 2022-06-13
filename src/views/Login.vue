<template >
  <div
    class="
      flex flex-grow
      justify-center
      items-start
      bg-gray-100
      dark:bg-gray-800
    "
  >
    <div
      class="
        container
        sm:mt-40
        mt-24
        my-auto
        max-w-lg
        border-2 border-gray-200
        p-3
        bg-white
        dark:bg-gray-800 dark:border-gray-800
      "
    >
      <!-- header -->
      <div class="text-center my-6 dark:rounded-lg">
        <h1 class="text-3xl font-semibold text-gray-700 dark:text-white">
          Log in
        </h1>
        <p class="text-gray-500 dark:text-indigo-500">
          Log in to access your account
        </p>
      </div>
      <!-- sign-in -->
      <div class="m-6">
        <form class="mb-4">
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm text-gray-600 dark:text-gray-300"
              >Email Address</label
            >
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email (optional)"
              required
              class="
                w-full
                px-3
                py-2
                placeholder-gray-300
                border border-gray-300
                rounded-md
                focus:outline-none
                focus:ring
                focus:ring-indigo-100
                focus:border-indigo-300
                dark:bg-gray-700
                dark:text-white
                dark:placeholder-gray-500
                dark:border-gray-600
                dark:focus:ring-gray-900
                dark:focus:border-gray-500
              "
              v-model="email"
            />
          </div>
          <div class="mb-6">
            <label
              for="username"
              class="block mb-2 text-sm text-gray-600 dark:text-gray-300"
              >Username</label
            >
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              class="
                w-full
                px-3
                py-2
                placeholder-gray-300
                border border-gray-300
                rounded-md
                focus:outline-none
                focus:ring
                focus:ring-indigo-100
                focus:border-indigo-300
                dark:bg-gray-700
                dark:text-white
                dark:placeholder-gray-500
                dark:border-gray-600
                dark:focus:ring-gray-900
                dark:focus:border-gray-500
              "
              v-model="username"
            />
          </div>
          <div class="mb-6">
            <div class="flex justify-between mb-2">
              <label
                for="password"
                class="text-sm text-gray-600 dark:text-gray-300"
                >Password</label
              >
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              class="
                w-full
                px-3
                py-2
                placeholder-gray-300
                border border-gray-300
                rounded-md
                focus:outline-none
                focus:ring
                focus:ring-indigo-100
                focus:border-indigo-300
                dark:bg-gray-700
                dark:text-white
                dark:placeholder-gray-500
                dark:border-gray-600
                dark:focus:ring-gray-900
                dark:focus:border-gray-500
              "
              v-model="password"
            />
          </div>
          <div class="mb-6">
            <button
              type="button"
              class="
                w-full
                px-3
                py-4
                text-white
                bg-indigo-500
                rounded-md
                hover:bg-indigo-600
                focus:outline-none
                duration-100
                ease-in-out
              "
              v-on:click="register"
            >
              Log in
              <!-- Navigate to dashboard after register -->
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import store from "@/store";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      email: "", // Optional
    };
  },
  methods: {
    register() {
      const { username, password, email } = this;
      axios
        .post("http://127.0.0.1:8000/users/login", {
          username: username,
          password: password,
          email: email,
        })
        .then(function (response) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("isLoggedIn", true);
          store.commit("setUsername", response.data.username);
          store.commit("setLoggedIn", true);
          store.commit("updateToken", response.data.token);
          window.location.href = '/dashboard'
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  components: {},
};
</script>