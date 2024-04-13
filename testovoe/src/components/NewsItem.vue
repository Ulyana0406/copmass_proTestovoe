<template>
  <div>
    <h2 @click="toggleBody">{{ news.title }}</h2>
    <p v-if="showBody">{{ news.body }}</p>
    <button @click="deleteNews()">Delete</button>
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

    deleteNews() {
      axios
        .delete(`https://jsonplaceholder.typicode.com/posts/${this.news.id}`)
        // Обратите внимание на использование обратных кавычек ` для вставки значения this.news.id
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
