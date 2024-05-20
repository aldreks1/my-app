<template>
  <div class="profile-page">
    <div v-if="sessionExpired" class="session-expired">
      <p>Your session has expired. Please reload the page to login again.</p>
      <button @click="reloadPage">Reload Page</button>
    </div>
    <div v-else class="profile-content">
      <h1>My profile</h1>
      <div v-if="isLoading" class="profile-details">
        <div class="profile-info">
          <div class="skeleton skeleton-text" v-for="n in 5" :key="n"></div>
        </div>
        <div v-if="isLoading" class="skeleton skeleton-image"></div>
      </div>
      <div v-else class="profile-details">
        <div class="profile-info">
          <div
            class="profile-item"
            v-for="(value, key) in userFields"
            :key="key"
          >
            <strong>{{ key }}:</strong> {{ value }}
          </div>
        </div>
        <div class="profile-image">
          <img :src="user.image" alt="Profile Image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ProfilePage",
  data() {
    return {
      user: {},
      sessionExpired: false,
      isLoading: true, // добавлено состояние загрузки
    };
  },
  computed: {
    userFields() {
      return {
        Username: this.user.username,
        Name: this.user.firstName,
        Lastname: this.user.lastName,
        Gender: this.user.gender,
        Email: this.user.email,
      };
    },
  },
  methods: {
    fetchUserData() {
      const token = localStorage.getItem("token");
      if (!token) {
        this.$router.push({ name: "LoginPage" });
        return;
      }
      axios
        .get("https://dummyjson.com/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          this.user = response.data;
          this.isLoading = false; // убираем состояние загрузки
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            this.sessionExpired = true;
            localStorage.removeItem("token");
          } else {
            console.error(error);
          }
          this.isLoading = false; // убираем состояние загрузки
        });
    },
    reloadPage() {
      window.location.reload();
    },
  },
  created() {
    this.fetchUserData();
  },
};
</script>

<style scoped>
.profile-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.session-expired {
  font-size: 44px;
  font-weight: bold;
  text-align: center;
  color: red;
}

h1 {
  font-size: 44px;
  margin-bottom: 20px;
}

.profile-details {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 110px;
}

.profile-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.profile-item {
  border-radius: 10px;
  box-shadow: 0px 2.75px 9px 0px rgba(0, 0, 0, 0.19);
  margin-bottom: 11px;
  padding: 8px 20px 8px 10px;
  text-align: left;
  white-space: nowrap;
}

.profile-image img {
  border-radius: 50%;
  width: 243px;
  height: 243px;
  object-fit: cover;
}

.session-expired button {
  background-color: rgba(255, 100, 100, 1);
  color: white;
  padding: 10px 40px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  line-height: 1.5;
  border-radius: 2px;
}

.session-expired button:hover {
  background-color: rgba(255, 87, 87, 1);
}

.session-expired button:active {
  background-color: rgba(255, 59, 59, 1);
}

/* Скелетон стили */
.skeleton {
  background-color: #e0e0e0;
  border-radius: 10px;
  margin-bottom: 11px;
}

.skeleton-text {
  width: 200px;
  height: 40px;
}

.skeleton-image {
  width: 243px;
  height: 243px;
  border-radius: 50%;
}
</style>
