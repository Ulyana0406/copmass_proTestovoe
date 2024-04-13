<template>
  <div>
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
.body {
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  display: flex;
  flex-direction: row;
}

* {
  margin: 0;
  padding: 0;
}

.menu-userProfile {
  border-bottom: solid 1px;
  border-color: gray;
}
.menu-News {
  border-bottom: solid 1px;
  border-color: gray;
} /*# sourceMappingURL=style.css.map */
</style>
