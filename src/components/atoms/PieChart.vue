<script lang="ts">
import Vue, { PropType } from 'vue';
import { Pie } from 'vue-chartjs';
import { ChartData, ChartOptions } from 'chart.js';

export default Vue.extend({
  extends: Pie,
  props: {
    data: Object as PropType<ChartData>,
    options: Object as PropType<ChartOptions>,
  },
  mounted() {
    this.renderChart(this.data, this.options);
  },
});
</script>
