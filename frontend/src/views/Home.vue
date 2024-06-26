<template>
  <div class="home">
    <NavbarHome :showModalRegister="showModalRegister" @open-register="openModalRegister" />
    <BannerHome :showModalRegister="showModalRegister" @open-register="openModalRegister" />
    <ServicesHome />
    <FooterHome />
    <ModalRegister :showModalRegister="showModalRegister" @close="closeModalRegister" />
  </div>
</template>

<script>
import NavbarHome from "../components/home/NavbarHome.vue";
import BannerHome from "../components/home/BannerHome.vue";
import ServicesHome from "../components/home/ServicesHome.vue";
import FooterHome from "../components/home/FooterHome.vue";
import ModalRegister from "../components/home/ModalRegister.vue";

export default {
  name: 'viewHome',
  components: { NavbarHome, BannerHome, ServicesHome, FooterHome, ModalRegister },
  data() {
    return {
      showModalRegister: false,
    };
  },
  methods: {
    openModalRegister() {
      this.showModalRegister = true;
    },
    closeModalRegister() {
      this.showModalRegister = false;
    },
  },
};
</script>

<style scoped>
.home {
  height: 100vh;
}
</style>
