<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/users">Users</router-link>
      <router-link to="/profile">Profile</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
header{
  margin-bottom: 73px;
}
header nav {
  display: flex;
  justify-content: space-around;
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
