<template>
  <div class="login">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/users">Users</router-link>
        <router-link to="/profile">Profile</router-link>
      </nav>
    </header>
    <main>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username:</label>
          <input type="text" v-model="username" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
        <div v-if="error" class="error">{{ error }}</div>
      </form>
    </main>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
      error: null,
    };
  },
  methods: {
    login() {
      axios
        .post("https://dummyjson.com/auth/login", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          this.$router.push({ name: "ProfilePage" });
        })
        .catch((error) => {
          console.error("Login error:", error);
          this.error = "Failed to login. Please check your credentials.";
        });
    },
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
button {
  background-color: #ff5733;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
.error {
  color: red;
}
</style>
