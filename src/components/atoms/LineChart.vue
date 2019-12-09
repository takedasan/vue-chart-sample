<script lang="ts">
import Vue from 'vue';
import { Line } from 'vue-chartjs';

export default Vue.extend({
  extends: Line,
  props: {
    data: Object,
    options: Object,
  },
  mounted() {
    this.renderChart(this.data, this.options);
  },
});
</script>
