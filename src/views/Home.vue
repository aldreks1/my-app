<template>
  <div class="home">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/users">Users</router-link>
        <router-link to="/profile">Profile</router-link>
      </nav>
    </header>
    <main>
      <h1>Home page</h1>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
      <router-link to="/login">
        <button>Authorization</button>
      </router-link>
      <img src="@/assets/welcome.png" alt="Welcome Image" />
    </main>
    <footer>
      <div>
        <a href="#"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
        <a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
        <a href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
        <a href="#"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
      </div>
      <p>Copyright ©2020 All rights reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
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
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
footer div a {
  margin: 0 10px;
}
</style>
