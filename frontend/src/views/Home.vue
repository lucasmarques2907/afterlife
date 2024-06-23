<template>
  <div>
    <NavbarHome/>
    <BannerHome />
    <ServicesHome />
  </div>
</template>

<script>
import NavbarHome from "../components/NavbarHome.vue"
import BannerHome from "../components/BannerHome.vue"
import ServicesHome from "../components/ServicesHome.vue"

export default {
  name: 'viewHome',
  components: {NavbarHome, BannerHome, ServicesHome}
};
</script>

<style scoped>

</style>
