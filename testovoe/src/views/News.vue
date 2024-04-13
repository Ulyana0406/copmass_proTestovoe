<template>
  <div class="allNews">
    <h1>Все новости</h1>
    <NewsList />
  </div>
</template>

<script>
import NewsList from "../components/NewsList.vue";

export default {
  components: {
    NewsList,
  },
};
</script>

<style scoped>
.allNews {
  background-color: #e7f6f6;
  width: 100%;
  padding-left: 30px;
}
</style>
