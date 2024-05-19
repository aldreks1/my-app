<template>
  <div class="profile wrapper">
    <HeaderComponent />
    <main>
      <h1>Profile</h1>
      <div v-if="user">
        <img :src="user.image" alt="Profile Image" />
        <p>{{ user.firstName }} {{ user.lastName }}</p>
        <p>{{ user.email }}</p>
      </div>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import axios from "axios";
import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";

export default {
  name: "ProfilePage",
  components: {
    HeaderComponent,
    FooterComponent,
  },
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
