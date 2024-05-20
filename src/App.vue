<template>
  <div id="app" class="wrapper">
    <HeaderComponent />
    <main>
      <router-view />
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header";
import FooterComponent from "@/components/Footer";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style src="./styles.css"></style>
