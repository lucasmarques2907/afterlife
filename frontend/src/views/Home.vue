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
import NavbarHome from "../components/NavbarHome.vue";
import BannerHome from "../components/BannerHome.vue";
import ServicesHome from "../components/ServicesHome.vue";
import FooterHome from "../components/FooterHome.vue";
import ModalRegister from "../components/ModalRegister.vue";

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
