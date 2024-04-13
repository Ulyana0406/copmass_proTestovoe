<template>
  <div class="item">
    <div class="new">
      <h1 class="itemnumber">{{ news.id }}</h1>

      <div class="newstext">
        <h3 class="title" @click="toggleBody">{{ news.title }}</h3>
        <p class="newAuthorId">id автора:{{ news.userId }}</p>
        <p v-if="showBody">{{ news.body }}</p>
      </div>
    </div>
    <button class="deleteButton" @click="deleteNews()">Удалить</button>
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
      if (confirm("Вы уверены, что хотите удалить эту новость?"))
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

<style>
.item {
  display: flex;
  background-color: white;
  border-bottom: solid 1px;
  border-color: #b6b6b6;
  align-items: center;
  justify-content: space-between;
}
.title {
  margin-bottom: 5px;
}
.new {
  display: flex;
}
.itemnumber {
  padding-left: 20px;
  font-size: 50px;
  display: flex;
  align-items: center;
  color: #cbcbcb;
}
.newstext {
  display: flex;
  flex-direction: column;
  margin-left: 53px;
}
.deleteButton {
  background-color: white;
  margin-right: 20px;
  border: none;
  background-color: none;
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 18px;
  color: #ff6d6df5;
}
.newAuthorId {
  margin-top: 0;
}
</style>
