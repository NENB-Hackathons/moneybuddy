<template>
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
        text-center
        w-full
        mx-auto
        py-12
        px-4
        sm:px-6
        lg:py-16 lg:px-8
        z-20
      "
    >
      <h2
        class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl"
      >Hi, {{name}}</h2>
      <h3 v-if="typeOfUser !== undefined" class="font-semibold text-white">Your quiz shows that you are a Average consumer</h3>
      <div class="lg:mt-0 lg:flex-shrink-0">
        <div class="mt-12 inline-flex rounded-md shadow">
            <button
              @click="openQuiz()"
              type="button"
              class="
                py-4
                px-6
                bg-indigo-600
                hover:bg-indigo-700
                focus:ring-indigo-500 focus:ring-offset-indigo-200
                text-white
                w-full
                transition
                ease-in
                duration-200
                text-center text-base
                font-semibold
                shadow-md
                focus:outline-none focus:ring-2 focus:ring-offset-2
                rounded-lg
              "
            >
              Take Quiz
            </button>
        </div>
      </div>
    </div>
    <div class="w-1/2">
      <DoughnutChart :width="20" :height="20" />
    </div>
  </div>
</template>

<script>
import DoughnutChart from "../components/doughnutChart";
import store from "@/store";

export default {
  name: "Dashboard",
  components: {
    DoughnutChart,
  },
  data() {
    return {
      name: localStorage.getItem("username"),
      typeOfUser: localStorage.getItem("data"),
    };
  },
  methods: {
    openQuiz() {
      store.commit("changeShowModal", true);
    },
  }
}
</script>