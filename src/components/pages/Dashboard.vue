<template>
  <div>
    <div class="top">
      <graph-card
        name="ユーザー数 推移"
        :data="getUserData"
        :label="getLabelList"
      ></graph-card>
      <graph-card
        name="プレビュー数 推移"
        :data="getPreviewData"
        :label="getLabelList"
      ></graph-card>
      <list-card name="データ一覧"></list-card>
    </div>
  </div>
</template>
<script>
import GraphCard from '../molecules/GraphCard';

export default {
  components: {
    GraphCard,
  },
  computed: {
    getUserData() {
      return [...Array(30)].map(
        () => 300 + Math.floor(Math.random() * Math.floor(200))
      );
    },
    getLabelList() {
      const date = new Date();
      date.setDate(0);
      return [...Array(30)].map(() => {
        date.setDate(date.getDate() + 1);
        return date.toLocaleDateString();
      });
    },
    getPreviewData() {
      return [...Array(30)].map(
        () => 300 + Math.floor(Math.random() * Math.floor(200))
      );
    },
  },
};
</script>
<style>
.top {
  padding: 66px 0 0 200px;
}
</style>
