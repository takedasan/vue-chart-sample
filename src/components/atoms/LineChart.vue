<script lang="ts">
import Vue, { PropType } from 'vue';
import { Line } from 'vue-chartjs';
import { ChartData, ChartOptions } from 'chart.js';

export default Vue.extend({
  extends: Line,
  props: {
    data: Object as PropType<ChartData>,
    options: Object as PropType<ChartOptions>,
  },
  mounted() {
    this.renderChart(this.data, this.options);
  },
});
</script>
