<template>
  <footer>
    <div>
      <a href="#"><img src="@/assets/facebook.png" alt="Facebook" /></a>
      <a href="#"><img src="@/assets/instagram.png" alt="Instagram" /></a>
      <a href="#"><img src="@/assets/twitter.png" alt="Twitter" /></a>
      <a href="#"><img src="@/assets/linkedin.png" alt="LinkedIn" /></a>
    </div>
    <p>Copyright ©2020 All rights reserved</p>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 36px;
  width: 100%;
}
footer div {
  display: flex;
  gap: 10px;
}
footer div a img {
  width: 30px;
  height: 30px;
}
</style>
