<template >
  <div class="flex justify-center bg-gray-100 dark:bg-gray-800">
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
          Sign Up
        </h1>
        <p class="text-gray-500 dark:text-indigo-500">
          Register to create an account
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
              placeholder="Your email address (optional)"
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
              placeholder="Your Prefered Username"
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
              placeholder="Your password"
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
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
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
      const { username, password, email} = this;
      const res = await fetch("http://127.0.0.1:8000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          email
        }),
      });
      const data = await res.json();
      console.log(data);
    },
  },
  components: {},
};
</script>