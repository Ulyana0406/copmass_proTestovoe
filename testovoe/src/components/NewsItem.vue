<template>
  <div>
    <h2 @click="toggleBody">{{ news.title }}</h2>
    <p v-if="showBody">{{ news.body }}</p>
    <button @click="confirmDelete">Delete</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["news"],
  data() {
    return {
      showBody: false,
    };
  },
  methods: {
    toggleBody() {
      this.showBody = !this.showBody;
    },
    confirmDelete() {
      if (window.confirm("Do you really want to delete this news item?")) {
        this.deleteNews();
      }
    },
    deleteNews() {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${this.news.id}`)
        .then(() => {
          this.$emit("deleteNews", this.news.id);
        })
        .catch((error) => {
          console.error("There was an error deleting the news:", error);
        });
    },
  },
};
</script>
