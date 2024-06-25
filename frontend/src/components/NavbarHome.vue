<template>
  <div>
    <v-app-bar :elevation="1" scroll-behavior="hide" color="#fff" class="px-md-6">
      <v-app-bar-title>
        <a class="navbar-brand" href="#">
          <img src="../assets/imgs/AfterlifeLogoCompleta.jpeg" class="pt-1" alt="Afterlife Logo">
        </a>
      </v-app-bar-title>
      <v-btn v-if="!isMobile" rounded="0" class="btn-registrar" @click="toggleDrawer" style="margin-right: 10px;">
        REGISTRAR
      </v-btn>
      <v-btn v-if="!isMobile" rounded="0" class="btn-entrar" @click="openModalLogin">
        ENTRAR
      </v-btn>
      <v-app-bar-nav-icon v-if="isMobile" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-if="isMobile" v-model="drawer" hide-overlay :location="drawerLocation">
      <v-list class="d-flex flex-column">
        <v-btn v-if="isMobile" rounded="0" class="btn-registrar btn-drawer" @click="toggleDrawer">
          REGISTRAR
        </v-btn>
        <v-btn v-if="isMobile" rounded="0" class="btn-entrar btn-drawer" @click="openModalLogin">
          ENTRAR
        </v-btn>
      </v-list>
    </v-navigation-drawer>
    <ModalLogin :showModal="showModalLogin" @close="closeModalLogin" />
  </div>
</template>

<script>
import ModalLogin from './ModalLogin.vue';

export default {
  name: 'NavbarHome',
  components: {
    ModalLogin
  },
  data() {
    return {
      drawer: false,
      showModalLogin: false,
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.display.smAndDown;
    },
    drawerLocation() {
      return this.isMobile ? 'top' : false;
    },
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    openModalLogin() {
      this.showModalLogin = true;
    },
    closeModalLogin() {
      this.showModalLogin = false;
    }
  },
};
</script>

<style scoped>
.navbar-brand img {
  max-width: 250px;
}
.btn-registrar {
  background-color: #91C141 !important;
  color: white !important;
  padding: 5px 10px;
  font-weight: bold !important;
}
.btn-entrar {
  background-color: #617A95 !important;
  color: white !important;
  font-weight: 900 !important;
}
.btn-registrar:hover {
  background-color: #6d9232 !important;
}
.btn-entrar:hover {
  background-color: #4d6279 !important;
}
.btn-drawer {
  width: 150px; 
  margin: 5px auto;
}
.v-navigation-drawer__scrim {
  height: 0;
}
</style>
