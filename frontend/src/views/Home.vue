<template>
  <div>
    <NavbarHome/>
    <BannerHome />
  </div>
</template>

<script>
import NavbarHome from "../components/NavbarHome.vue"
import BannerHome from "../components/BannerHome.vue"
export default {
  name: 'viewHome',
  components: {NavbarHome, BannerHome}
};
</script>

<style scoped>

</style>
