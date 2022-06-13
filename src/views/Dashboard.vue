<template>
  <DoughnutChart />
  <Questionaire v-if="$store.state.showModal"></Questionaire>
</template>

<script>
import DoughnutChart from '../components/doughnutChart'
import Questionaire from '../components/doughnutChart.vue'

export default {
  name: "Dashboard",
  components: {
    DoughnutChart,
    Questionaire
  },
};
</script>