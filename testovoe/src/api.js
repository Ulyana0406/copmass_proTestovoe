import axios from "axios";

export default {
  data() {
    return {
      newsList: [],
      loading: false,
      visibleBodies: [],
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
          console.error("Error fetching news:", error);
          this.loading = false;
        });
    },
    toggleBody(newsId) {
      const index = this.visibleBodies.indexOf(newsId);
      if (index === -1) {
        this.visibleBodies.push(newsId);
      } else {
        this.visibleBodies.splice(index, 1);
      }
    },
    confirmDelete(newsId) {
      if (window.confirm("Do you really want to delete this news item?")) {
        this.deleteNews(newsId);
      }
    },
    deleteNews(newsId) {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${newsId}`)
        .then(() => {
          this.newsList = this.newsList.filter((news) => news.id !== newsId);
        })
        .catch((error) => {
          console.error("Error deleting the news:", error);
        });
    },
  },
};
