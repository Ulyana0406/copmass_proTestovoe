<template>
  <div>
    <div v-if="loading">Loading news...</div>
    <div v-for="news in newsList" :key="news.id">
      <NewsItem :news="news" />
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
  },
};
</script>
