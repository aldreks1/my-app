<template>
  <div class="users wrapper">
    <HeaderComponent />
    <main>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.firstName }} {{ user.lastName }} - {{ user.email }}
        </li>
      </ul>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import axios from "axios";
import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";
export default {
  name: "UsersPage",
  components: {
    HeaderComponent,
    FooterComponent,
  },
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
