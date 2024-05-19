<template>
  <div class="profile">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/users">Users</router-link>
        <router-link to="/profile">Profile</router-link>
      </nav>
    </header>
    <main>
      <h1>Profile</h1>
      <div v-if="user">
        <img :src="user.image" alt="Profile Image" />
        <p>{{ user.firstName }} {{ user.lastName }}</p>
        <p>{{ user.email }}</p>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProfilePage",
  data() {
    return {
      user: null,
    };
  },
  created() {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("https://dummyjson.com/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          this.user = response.data;
        });
    } else {
      this.$router.push({ name: "Login" });
    }
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
