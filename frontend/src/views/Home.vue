<template>
  <div class="home">
    <NavbarHome/>
    <BannerHome />
    <ServicesHome />
    <FooterHome />
  </div>
</template>

<script>
import NavbarHome from "../components/home/NavbarHome.vue"
import BannerHome from "../components/home/BannerHome.vue"
import ServicesHome from "../components/home/ServicesHome.vue"
import FooterHome from "../components/home/FooterHome.vue"

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
