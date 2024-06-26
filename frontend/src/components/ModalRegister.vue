<template>
  <v-dialog v-model="dialog" max-width="800">
    <v-card class="pa-4">
      <v-card-title>Cadastro</v-card-title>
      <form @submit.prevent="submit">
        <v-card-text class="pb-0">
          <p class="pb-2">TITULAR</p>
          <v-row>
            <v-col cols="12" md="6" class="pb-0">
              <v-text-field label="Nome completo" type="text" required></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="pb-0">
              <v-text-field label="CPF" type="text" required></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="pb-0">
              <v-text-field label="Telefone" type="text" required></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="pb-0">
              <v-text-field label="Data de nascimento" type="text" required></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="pb-0">
              <v-text-field label="E-mail" type="email" required></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="pb-0">
              <v-text-field label="Senha" type="password" required></v-text-field>
            </v-col>
            <v-col cols="12" md="6" class="pb-0">
              <v-text-field label="Confirmação da senha" type="password" required></v-text-field>
            </v-col>
          </v-row>
          <p class="pt-4 pb-2">DEPENDENTES</p>
        </v-card-text>
        <v-card-actions class="pb-1">
          <v-btn class="btn-entrar" rounded="0" text @click="closeDialog" block>Entrar</v-btn>
        </v-card-actions>
      </form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ModalRegister',
  props: {
    showModalRegister: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      dialog: this.showModalRegister,
    };
  },
  watch: {
    showModalRegister(val) {
      this.dialog = val;
    },
    dialog(val) {
      if (!val) {
        this.$emit('close');
      }
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
