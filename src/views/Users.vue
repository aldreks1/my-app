<template>
  <div class="users-page">
    <ul v-if="isLoading" class="user-list">
      <li v-for="n in 10" :key="n" class="skeleton skeleton-item"></li>
    </ul>
    <ul v-else class="user-list">
      <li v-for="user in users" :key="user.id" class="user-item">
        <div class="user-info">
          <div class="user-name">
            <p>
              {{ user.firstName }} {{ user.lastName }} {{ user.maidenName }}
            </p>
          </div>
          <div class="user-email">
            <p>{{ user.email }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserPage",
  data() {
    return {
      users: [],
      isLoading: true, // добавлено состояние загрузки
    };
  },
  methods: {
    fetchUsers() {
      axios
        .get("https://dummyjson.com/users")
        .then((response) => {
          this.users = response.data.users;
          this.isLoading = false; // убираем состояние загрузки
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
          this.isLoading = false; // убираем состояние загрузки
        });
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<style scoped>
.users-page {
  font-family: Roboto, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-list {
  width: 100%;
  max-width: 600px;
}

.user-item {
  border-radius: 10px;
  box-shadow: 0px 2.75px 9px 0px rgba(0, 0, 0, 0.19);
  margin: 18px 0;
  padding: 16px;
}

.user-item p {
  margin: 0;
}

.user-info {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.user-name {
  font-weight: bold;
}

.user-email {
  color: rgba(0, 0, 0, 0.6);
}

/* Скелетон стили */
.skeleton {
  background-color: #e0e0e0;
  border-radius: 10px;
  margin-bottom: 18px;
}
.skeleton-item {
  border-radius: 10px;

  height: 51px;
}
</style>
