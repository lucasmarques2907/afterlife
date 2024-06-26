<template>
  <v-dialog v-model="dialog" max-width="400">
    <v-card class="pa-4">
      <v-card-title class="text-center">Acesse sua Conta</v-card-title>
      <form @submit.prevent="submit">
        <v-card-text class="pb-0">
          <v-text-field label="Email" type="email" required></v-text-field>
          <v-text-field label="Senha" type="password" required></v-text-field>
        </v-card-text>
        <v-card-actions class="pb-1">
          <v-btn class="btn-entrar" rounded="0" text @click="closeDialog" block>Entrar</v-btn>
        </v-card-actions>
      </form>
      <a class="text-center esqueceuSenha" href="#">Esqueceu sua senha?</a>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ModalLogin',
  props: {
    showModal: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      dialog: this.showModal,
    };
  },
  watch: {
    showModal(val) {
      this.dialog = val;
    },
    dialog(val) {
      if (!val) {
        this.$emit('close');
      }
    }
  },
  methods: {
    closeDialog() {
      this.dialog = false;
    },
    submit() {
      
    }
  },
};
</script>

<style scoped>
.btn-entrar {
  background-color: #91C141 !important;
  color: white !important;
  font-weight: bold !important;
}
.btn-entrar:hover {
  background-color: #6d9232 !important;
}
.esqueceuSenha {
  text-decoration: none;
  color: black;
  font-size: 14px;
}
</style>
