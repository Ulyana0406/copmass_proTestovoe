<template>
  <div class="menu">
    <section class="menu-userProfile">
      <div class="menu-userProfile__img">
        <!-- icon666.com - MILLIONS vector ICONS FREE --><svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 457.728 457.728"
          style="enable-background: new 0 0 457.728 457.728"
          xml:space="preserve"
        >
          <g>
            <g>
              <path
                d="M228.864,0C102.912,0,0,102.4,0,228.864c0,125.952,102.4,228.864,228.864,228.864s228.864-102.912,228.864-228.864 S354.816,0,228.864,0z M228.864,117.248c38.912,0,71.168,31.744,71.168,71.168c0,38.912-31.744,71.168-71.168,71.168 s-71.168-32.256-71.168-71.68C157.696,148.992,189.952,117.248,228.864,117.248z M228.864,410.624 c-43.52,0-83.456-15.36-114.688-40.96c32.768-35.84,72.704-55.808,114.688-55.808s82.432,19.456,114.688,55.808 C312.32,395.264,272.384,410.624,228.864,410.624z"
              />
            </g>
          </g>
        </svg>
      </div>
      <div class="menu-userProfile__info">
        <h3 class="profilName">Ирина</h3>
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
<style>
.sidebar {
  position: fixed;
  display: flex;
  flex-direction: column;
}
.menu {
  z-index: 1;
  box-shadow: 9px 0px 6px -5px rgba(34, 60, 80, 0.2);
  background-color: rgb(255, 255, 255);
  width: 496px;
  display: flex;
  flex-direction: column;
}

.menu-userProfile {
  gap: 20px;
  display: flex;
  border-bottom: solid 1px;
  border-color: #c2c2c2;
  align-items: center;
}
.menu-News {
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: solid 1px;
  border-color: #c2c2c2;
}
.menu-AddPost {
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: solid 1px;
  border-color: #c2c2c2;
}
.menu-News__allNews {
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  border: none;
  font-size: 16px;
  background-color: white;
}
.menu-AddPost__allNews {
  font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  border: none;
  font-size: 16px;

  background-color: white;
}
.profilName {
  margin-bottom: 5px;
}
.menu-userProfile__info {
  margin-bottom: 10px;
}
.menu-userProfile__img {
  height: 50px;
  width: 50px;
}
</style>
