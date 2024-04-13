<template>
  <div>
    <div v-if="loading">Loading news...</div>
    <div class="newsList" v-for="news in newsList" :key="news.id">
      <NewsItem :news="news" @deleteNews="deleteNewsItem" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NewsItem from "./NewsItem.vue";

export default {
  components: {
    NewsItem,
  },
  data() {
    return {
      newsList: [],
      loading: false,
    };
  },
  created() {
    this.fetchNews();
  },
  methods: {
    fetchNews() {
      this.loading = true;
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          this.newsList = response.data;
          this.loading = false;
        })
        .catch((error) => {
          console.error("There was an error fetching the news:", error);
          this.loading = false;
        });
    },
    deleteNewsItem(newsId) {
      this.newsList = this.newsList.filter((item) => item.id !== newsId);
    },
  },
};
</script>

<style>
.newsList {
  width: 850px;
  margin: 0;
}
</style>
