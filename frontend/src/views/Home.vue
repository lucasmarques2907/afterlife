<template>
  <div class="home">
    <NavbarHome/>
    <BannerHome />
    <ServicesHome />
    <FooterHome />
  </div>
</template>

<script>
import NavbarHome from "../components/NavbarHome.vue"
import BannerHome from "../components/BannerHome.vue"
import ServicesHome from "../components/ServicesHome.vue"
import FooterHome from "../components/FooterHome.vue"

export default {
  name: 'viewHome',
  components: {NavbarHome, BannerHome, ServicesHome, FooterHome}
};
</script>

<style scoped>
.home{
  height: 100vh;
}
</style>
