<template>
  <v-dialog v-model="dialog" max-width="1000">
    <v-card class="pa-4">
      <v-card-title>Configurar Conta</v-card-title>
      <form @submit.prevent="submit">
        <v-card-text class="pb-0">
          <h4 class="pb-2 font-weight-bold">TITULAR</h4>
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
            <v-col cols="12" md="6">
              <v-text-field label="Confirmação da senha" type="password" required></v-text-field>
            </v-col>
          </v-row>
          <h4 class="pt-2 font-weight-bold">DEPENDENTES</h4>
          <div v-for="(dependent, index) in dependents" :key="index">
            <div class="d-flex justify-space-between pt-1">
              <h4 class="pt-4 pb-2">DEPENDENTE {{ index + 1 }}</h4>
              <v-btn icon="mdi-delete" elevation="0" @click="removeDependent(index)"></v-btn>
            </div>
            <v-row>
              <v-col cols="12" md="6" class="pb-0">
                <v-text-field label="Nome completo" type="text" v-model="dependent.name" required></v-text-field>
              </v-col>
              <v-col cols="12" md="6" class="pb-0">
                <v-text-field label="E-mail" type="email" v-model="dependent.email" required></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="pb-0">
                <v-text-field label="Grau de Parentesco" type="text" v-model="dependent.relationship" required></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="pb-0">
                <v-text-field label="CPF" type="text" v-model="dependent.cpf" required></v-text-field>
              </v-col>
              <v-col cols="12" md="4" class="pb-0">
                <v-text-field label="Telefone" type="text" v-model="dependent.phone" required></v-text-field>
              </v-col>
            </v-row>
          </div>
          <v-col cols="12" class="text-center mb-2 mt-0">
            <v-btn text elevation="0" rounded="0" @click="addDependent"><span class="mdi mdi-plus"></span>Adicionar</v-btn>
          </v-col>
        </v-card-text>
        <v-card-actions class='d-flex justify-center'>
          <v-btn text rounded="0" @click="closeDialog">Cancelar</v-btn>
          <v-btn class="btn-entrar" rounded="0" text @click="saveItem">Salvar</v-btn>
        </v-card-actions>
      </form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ModalSetting',
  props: {
    showModalSetting: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      dialog: this.showModalSetting,
      dependents: [
        {
          name: '',
          email: '',
          relationship: '',
          cpf: '',
          phone: ''
        }
      ]
    };
  },
  watch: {
    showModalSetting(val) {
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
      this.$emit('close');
    },
    addDependent() {
      this.dependents.push({
        name: '',
        email: '',
        relationship: '',
        cpf: '',
        phone: ''
      });
    },
    removeDependent(index) {
      this.dependents.splice(index, 1);
    },
    saveItem() {
    }
  }
};
</script>

<style scoped>
.btn-entrar {
  background-color: #91C141 !important;
  color: white !important;
  font-weight: bold !important;
  width: 100px;
}

.btn-entrar:hover {
  background-color: #6d9232 !important;
}

.action {
  display: flex;
  justify-content: center;
}
</style>
