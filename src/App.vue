<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
header nav {
  background-color: #f8f9fa;
  padding: 10px;
}
header nav a {
  margin: 0 15px;
  text-decoration: none;
  color: #000;
}
header nav a.router-link-exact-active {
  font-weight: bold;
}
</style>
