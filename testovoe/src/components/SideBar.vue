<template>
  <div class="menu">
    <section class="menu-userProfile">
      <div class="menu-userProfile__img">
        <img class="imgProfile" src="assets/logo.png" alt="" />
      </div>
      <div class="menu-userProfile__info">
        <p>Ирина</p>
        <a>test@mail.ru</a>
      </div>
    </section>
    <section class="menu-News">
      <img src="" alt="" />
      <button @click="goToNewsList" class="menu-News__allNews">
        Все новости
      </button>
    </section>
    <section class="menu-AddPost">
      <img src="" alt="" />
      <button @click="goToAddNews" class="menu-AddPost__allNews">
        Добавить новость
      </button>
    </section>
  </div>
</template>
<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const goToNewsList = () => {
      router.push("/");
    };

    const goToAddNews = () => {
      router.push("/create");
    };

    return {
      goToNewsList,
      goToAddNews,
    };
  },
};
</script>
<style></style>
