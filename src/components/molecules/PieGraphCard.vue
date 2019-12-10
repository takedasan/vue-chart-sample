<template>
  <div class="graph">
    <div>{{ name }}</div>
    <pie-chart
      class="chart"
      :data="getChartData()"
      :options="getOptions()"
      :height="270"
      :width="770"
    ></pie-chart>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PieChart from '../atoms/PieChart.vue';

export default Vue.extend({
  components: {
    PieChart,
  },
  props: {
    name: String,
    data: Array,
    label: Array,
  },
  data() {
    return {
      graphData: null,
    };
  },
  methods: {
    getChartData() {
      return {
        labels: this.label,
        datasets: [
          {
            data: this.data,
            borderColor: '#3280f57e',
            backgroundColor: this.data.map(
              () =>
                'rgb(' +
                ~~(256 * Math.random()) +
                ', ' +
                ~~(256 * Math.random()) +
                ', ' +
                ~~(256 * Math.random()) +
                ')'
            ),
            animation: false,
          },
        ],
      };
    },
    getOptions() {
      return {
        legend: {
          display: true,
        },
      };
    },
  },
});
</script>
<style scoped lang="scss">
.graph {
  display: inline-block;
  margin: 0 0 40px 40px;
  height: 300px;
  width: 770px;
  background-color: white;
  border: 0 solid #aaa;
  border-radius: 4px;
  box-shadow: 2px 2px 2px 2px #ccc;
  padding: 15px;
}
.chart {
  padding-top: 15px;
}
</style>
