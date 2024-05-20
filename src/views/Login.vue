<template>
  <div class="login-page">
    <div class="login-container">
      <div class="header">
        <h2>Authorization</h2>
        <span v-if="error" class="error-message">{{ error }}</span>
      </div>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="username">Login</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
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
        .catch(() => {
          this.error = "Invalid credentials";
        });
    },
  },
};
</script>

<style scoped>
.login-page {
  font-family: Roboto, sans-serif;
  display: flex;

  justify-content: center;
  align-items: center;
}

.login-container {
  border-radius: 10px;
  box-shadow: 0px 2.75px 9px 0px rgba(0, 0, 0, 0.19);
  padding: 16px;
  max-width: 335px;
  width: 100%;
}

.header {
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 26px;
}

h2 {
  margin: 0;
  font-size: 16px;
}
.error-message {
  color: red;
  font-size: 16px;
}

form {
  color: rgba(0, 0, 0, 0.6);
  width: 152px;
  margin: 0 auto;
}

.form-group {
  font-size: 14px;
  margin-bottom: 15px;
  text-align: left;
}

label {
  font-size: 14px;
  display: block;
  margin-bottom: 8px;
}

input {
  box-shadow: 0px 2.75px 9px 0px rgba(0, 0, 0, 0.19);
  height: 29px;
  width: 152px;
  padding: 8px;
  border: none;
  border-radius: 10px;
}

button {
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
  background-color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 43px;
}
</style>
