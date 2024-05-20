<template>
  <div class="home">
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
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.welcome {
  width: 500px;
}
h1 {
  font-size: 44px;
}
main {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: self-start;
}
main div p {
  margin-bottom: 42px;
}
button {
  background-color: rgba(255, 100, 100, 1);
  color: white;
  padding: 10px 40px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  line-height: 1.5;
  border-radius: 2px;
}
button:hover {
  background-color: rgba(255, 87, 87, 1);
}
button:active {
  background-color: rgba(255, 59, 59, 1);
}
img {
  max-width: 100%; /* ограничение по ширине */
  max-height: 100%; /* ограничение по высоте */
  height: auto; /* сохраняет соотношение сторон */
}
</style>
