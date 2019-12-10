<template>
  <div>
    <div class="top">
      <line-graph-card
        name="ユーザー数 推移"
        :data="getUserData"
        :label="getUserLabelList"
      ></line-graph-card>
      <pie-graph-card
        name="ユーザー年齢 割合"
        :data="getAgeData"
        :label="getAgeLabelList"
      >
      </pie-graph-card>
    </div>
  </div>
</template>
<script>
import LineGraphCard from '../molecules/LineGraphCard.vue';
import PieGraphCard from '../molecules/PieGraphCard.vue';

export default {
  components: {
    LineGraphCard,
    PieGraphCard,
  },
  computed: {
    // User
    getUserData() {
      return [...Array(30)].map(
        () => 300 + Math.floor(Math.random() * Math.floor(200))
      );
    },
    getUserLabelList() {
      const date = new Date();
      date.setDate(0);
      return [...Array(30)].map(() => {
        date.setDate(date.getDate() + 1);
        return date.toLocaleDateString();
      });
    },
    // Age
    getAgeData() {
      return [...Array(5)].map(() =>
        Math.floor(Math.random() * Math.floor(10))
      );
    },
    getAgeLabelList() {
      return ['10代', '20代', '30代', '40代', '50代'];
    },
  },
};
</script>
<style scoped lang="scss">
.top {
  padding: 66px 0 0 200px;
}
</style>
