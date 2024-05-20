<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/users">Users</router-link>
      <router-link to="/profile">Profile</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
header {
  margin-bottom: 73px;
}
header nav {
  display: flex;
  justify-content: end;
  margin-top: 27px;
}
header nav a {
  position: relative;
  margin: 0 30px;
  text-decoration: none;
  color: #000;
  font-weight: bold;
  font-size: 20px;
}
header nav a:after {

  display: block;
  position: absolute;
  left: 0; /*изменить на right:0;, чтобы изменить направление подчёркивания */
  width: 0; /*задаём длинну линии до наведения курсора*/
  height: 2px; /*задаём ширину линии*/
  background-color: rgba(255, 100, 100, 1); /*задаём цвет линии*/
  content: "";
  transition: width 0.3s ease-out; /*задаём время анимации*/
}
header nav a:hover:after,
header nav a.router-link-exact-active:after {
  width: 100%; /*устанавливаем значение 100% чтобы ссылка подчёркивалась полностью*/
}
</style>
