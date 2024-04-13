<template>
  <form @submit.prevent="submitNews">
    <input v-model="newNews.title" placeholder="Title" required />
    <textarea v-model="newNews.body" placeholder="Content" required></textarea>
    <button type="submit">Добавить новость</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      newNews: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    submitNews() {
      axios
        .post("https://jsonplaceholder.typicode.com/posts", this.newNews)
        // eslint-disable-next-line no-unused-vars
        .then((response) => {
          alert("News added!");
          this.resetForm(); // Reset form after successful post
        })
        .catch((error) => {
          console.error("There was an error posting the news:", error);
          alert("Failed to add news. Please try again.");
        });
    },
    resetForm() {
      this.newNews.title = "";
      this.newNews.body = "";
    },
  },
};
</script>

<style scoped>
input,
textarea {
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  cursor: pointer;
}
</style>
