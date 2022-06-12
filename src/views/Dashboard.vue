<template>
  <h1>{{ $store.state.isLoggedIn }}d</h1>
  <DoughnutChart />
</template>

<script>
import DoughnutChart from '../components/doughnutChart'

export default {
  name: "Dashboard",
  components: {
    DoughnutChart
  },
};
</script>