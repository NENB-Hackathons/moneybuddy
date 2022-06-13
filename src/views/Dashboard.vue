<template>
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
      >
      </h2>
      <div class="lg:mt-0 lg:flex-shrink-0">
        <div class="mt-12 inline-flex rounded-md shadow">
            <button
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
              Take QUiz
            </button>
        </div>
      </div>
</div>
  <DoughnutChart />
</template>

<script>
import DoughnutChart from "../components/doughnutChart";

export default {
  name: "Dashboard",
  components: {
    DoughnutChart,
  },
};
</script>