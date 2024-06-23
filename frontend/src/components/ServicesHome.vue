<template>
  <div class="services">
    <h1 class="font-weight-bold text-center" style="line-height: 1.2em;">Conheça nossos serviços</h1>
    <v-row class="mt-5">
      <v-col cols="12" sm="4" class="service text-center">
        <div class="border-icons">
            <span class="mdi mdi-key-outline icon" style="rotate: 30deg;"></span>
        </div>
        <p>
          Armazene de forma protegida e confiável documentos, senhas e quaisquer dados importantes para o presente e o futuro.
        </p>
      </v-col>
      <v-col cols="12" sm="4" class="service text-center">
        <div class="border-icons">
            <span class="mdi mdi-account-check-outline icon"></span>
        </div>
        <p>
          Na ausência do titular da conta, os dependentes pré-definidos receberão autorização por email para acesso aos dados armazenados.
        </p>
      </v-col>
      <v-col cols="12" sm="4" class="service text-center">
        <div class="border-icons">
            <span class="mdi mdi-monitor-cellphone icon"></span>
        </div>
        <p>
          Acesse facilmente em diversos dispositivos, desfrutando de uma experiência consistente e intuitiva.
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ServicesHome'
};
</script>

<style scoped>
.services {
    margin: auto;
    padding: 45px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 90%;
}

.service {
    max-width: 350px;
}

.icon {
    font-size: 40px;
}

.border-icons {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  border-radius: 100%;
  width: 70px;
  height: 70px;
  margin: 0 auto 12px;

}

</style>
