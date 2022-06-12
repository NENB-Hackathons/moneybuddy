  <template>
      <div class="inline-flex justify-between items-center h-20 w-screen bg-gray-900 border-b border-gray-800 hover:duration-200">
        <router-link to="/" class="m-8 font-semibold text-gray-300 hover:text-gray-400 cursor-pointer">
          MoneyBuddy
        </router-link>
        <div class="flex items-center m-8 font-semibold text-gray-300 ">
          <router-link to="login" class="m-2 cursor-pointer hover:text-gray-400">
            Login
          </router-link>
          <router-link to="register" class="m-4 text-gray-300 cursor-pointer bg-indigo-600 px-7 py-2 rounded-3xl hover:bg-indigo-700 ">
            Register  
          </router-link>
        </div>
      </div>
  </template>

  <script>
  export default {
    name: "Nav",
    props: {},
  };


  </script>