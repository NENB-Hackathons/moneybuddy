<template>
    <div class="inline-flex justify-between items-center h-20 w-screen bg-gray-900 border-b border-gray-800 ">
      <router-link to="/" class="m-8 font-semibold text-gray-300 cursor-pointer">
        Name
      </router-link>
      <div class="flex items-center m-8 font-semibold text-gray-300 ">
        <router-link to="login" class="m-4 cursor-pointer">
          Login
        </router-link>
        <router-link to="register" class="m-4 cursor-pointer">
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