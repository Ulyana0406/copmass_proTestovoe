<template>
  <div class="app" id="app">
    <SideBar />
    <router-view />
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";

export default {
  name: "App",
  components: {
    SideBar,
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
  background-color: rgb(255, 255, 255);
  width: 274px;
  display: flex;
  flex-direction: column;
}
.imgProfile {
  height: 40px;
  width: 40px;
}
.menu-userProfile {
  gap: 20px;
  display: flex;
  border-bottom: solid 1px;
  border-color: gray;
}
.menu-News {
  border-bottom: solid 1px;
  border-color: gray;
}
</style>
