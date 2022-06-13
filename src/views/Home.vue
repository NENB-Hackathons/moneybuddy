<template>
  <div class="bg-white flex flex-grow dark:bg-gray-800">
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
        <span class="block"> Make financial security easy! </span>
        <span class="block text-indigo-500"> Free, always. </span>
      </h2>
      <p class="text-xl mt-4 max-w-md mx-auto text-gray-400">
        MoneyBuddy is a free tool to help you manage your financial health, take
        our free quiz today.
      </p>
      <div class="lg:mt-0 lg:flex-shrink-0">
        <div class="mt-12 inline-flex rounded-md shadow">
          <router-link to="/register">
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
              Sign Up
            </button>
          </router-link>
        </div>
      </div>
      <section>
        <div
          class="
            container
            max-w-full
            mx-auto
            p-4
            sm:p-6
            lg:p-8
            bg-white
            dark:bg-gray-800
          "
        >
          <div class="flex p-4 max-w-7xl flex-wrap mx-auto">
            <div class="w-full lg:w-1/2 px-8">
              <div class="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                <h2
                  class="
                    mb-4
                    text-3xl
                    lg:text-4xl
                    font-bold font-heading
                    dark:text-white
                  "
                >
                  A money management platform to help you save more effectively!
                </h2>
                <p class="mb-8 leading-loose text-gray-500 dark:text-gray-300">
                  MoneyBuddy is a new kind of money management tool. Save at
                  your own pace and get a simple look at your financial help
                  with our free quiz.
                </p>
              </div>
            </div>
            <div class="w-full lg:w-1/2 px-8">
              <ul class="space-y-12">
                <li class="flex -mx-4">
                  <div class="px-4">
                    <span
                      class="
                        flex
                        w-16
                        h-16
                        mx-auto
                        items-center
                        justify-center
                        text-2xl
                        font-bold font-heading
                        rounded-full
                        bg-blue-50
                        text-blue-600
                      "
                    >
                      1
                    </span>
                  </div>
                  <div class="px-4">
                    <h3 class="my-4 text-xl font-semibold dark:text-white">
                      Take our quiz
                    </h3>
                    <p class="text-gray-500 dark:text-gray-300 leading-loose">
                      Answer questions about your spending, it will only take 5
                      minutes.
                    </p>
                  </div>
                </li>
                <li class="flex -mx-4">
                  <div class="px-4">
                    <span
                      class="
                        flex
                        w-16
                        h-16
                        mx-auto
                        items-center
                        justify-center
                        text-2xl
                        font-bold font-heading
                        rounded-full
                        bg-blue-50
                        text-blue-600
                      "
                    >
                      2
                    </span>
                  </div>
                  <div class="px-4">
                    <h3 class="my-4 text-xl font-semibold dark:text-white">
                      Learn where you stand
                    </h3>
                    <p class="text-gray-500 dark:text-gray-300 leading-loose">
                      Instantly find out how financially healthy you are, and
                      where you may need to improve.
                    </p>
                  </div>
                </li>
                <li class="flex -mx-4">
                  <div class="px-4">
                    <span
                      class="
                        flex
                        w-16
                        h-16
                        mx-auto
                        items-center
                        justify-center
                        text-2xl
                        font-bold font-heading
                        rounded-full
                        bg-blue-50
                        text-blue-600
                      "
                    >
                      3
                    </span>
                  </div>
                  <div class="px-4">
                    <h3 class="my-4 text-xl font-semibold dark:text-white">
                      Work toward a better future
                    </h3>
                    <p class="text-gray-500 dark:text-gray-300 leading-loose">
                      Make small improvements to your financial health and watch
                      your score increase!
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>