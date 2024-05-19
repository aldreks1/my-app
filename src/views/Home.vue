<template>
  <div class="home wrapper">
    <HeaderComponent />
    <main>
      <div class="welcome">
        <h1>Home page</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <router-link to="/login">
          <button>Authorization</button>
        </router-link>
      </div>
      <img src="@/assets/tools.png" alt="Welcome Image" />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";

export default {
  name: "HomePage",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped>
.welcome {
  width: 500px;
}
main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: self-start;
}
button {
  background-color: rgba(255, 100, 100, 1);
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
img {
  max-width: 100%; /* ограничение по ширине */
  max-height: 100%; /* ограничение по высоте */
  height: auto; /* сохраняет соотношение сторон */
}
</style>
