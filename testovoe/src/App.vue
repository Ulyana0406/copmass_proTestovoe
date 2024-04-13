<template>
  <div class="app" id="app">
    <div class="menu">
      <section class="menu-userProfile">
        <div class="menu-userProfile__img">
          <img src="" alt="" />
        </div>
        <div class="menu-userProfile__info">
          <p>Ирина</p>
          <a>test@mail.ru</a>
        </div>
      </section>
      <section class="menu-News">
        <img src="" alt="" />
        <div class="menu-News__allNews">Все новости</div>
      </section>
      <section class="menu-AddPost">
        <img src="" alt="" />
        <div class="menu-AddPost__allNews">Добавить новость</div>
      </section>
    </div>
    <Home />
  </div>
</template>

<script>
import Home from "./views/Home.vue";
// import router from "./router";

export default {
  name: "App",
  components: {
    Home,
  },
  methods: {
    goToNewsList() {
      this.$router.push("/");
    },
    goToAddNews() {
      this.$router.push("/create");
    },
  },
};
</script>

<style>
.app {
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  display: flex;
}
.sidebar {
  display: flex;
  flex-direction: column;
  margin-right: 50px;
}
.menu {
  display: flex;
  flex-direction: column;
  margin-right: 125px;
}
.menu-userProfile {
  border-bottom: solid 1px;
  border-color: gray;
}
.menu-News {
  border-bottom: solid 1px;
  border-color: gray;
} /*# sourceMappingURL=style.css.map */
/* Global styles, potentially for body, header, etc. */
</style>
