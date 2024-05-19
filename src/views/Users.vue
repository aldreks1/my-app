<template>
  <div class="users">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/users">Users</router-link>
        <router-link to="/profile">Profile</router-link>
      </nav>
    </header>
    <main>
      <h1>Users</h1>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.firstName }} {{ user.lastName }} - {{ user.email }}
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UsersPage",
  data() {
    return {
      users: [],
    };
  },
  created() {
    axios.get("https://dummyjson.com/users").then((response) => {
      this.users = response.data.users;
    });
  },
};
</script>

<style scoped>
header nav {
  display: flex;
  justify-content: space-around;
}
main {
  text-align: center;
}
</style>
