<template>
  <footer>
    <div class="footer d-flex flex-column">
      <div class="d-flex flex-column flex-sm-row justify-center align-center ga-sm-10">
        <div cols="12" sm="3">
          <img src="../assets/imgs/AfterlifeLogoSimples.png" alt="logo AfterLife">
        </div>
        <div cols="12" sm="4" class="text-center text-sm-left">
            <p class="font-weight-bold">CONTATO</p>
            <a href="#" class="footer-link">contato@afterlife.com.br</a>
        </div>
        <div cols="12" sm="4" class="text-center text-sm-left">
            <p class="font-weight-bold">REDES SOCIAIS</p>
            <span class="mdi mdi-instagram"></span>
        </div>
      </div>
      <p class="copyright text-center">&copy;AFTERLIFE | TODOS OS DIREITOS RESERVADOS</p>
    </div>
  </footer>
</template>


<script>
export default {
  name: 'FooterHome'
};
</script>

<style scoped>
.footer {
    align-items: center;
    background-color: #617A95;
    color: #fff;
    padding: 20px 0;
    justify-content: center;
    margin-bottom: 0;
}

.copyright {
  font-size: 10px;
}

footer a {
  color: #fff;
  text-decoration: none;
  letter-spacing: 0.5px;
}

footer p {
  color: #fff;
  margin-bottom: 0;
  margin-top: 20px;
  letter-spacing: 0.5px;
  font-size: 12px;
}

.footer-link {
  padding: 0;
  font-size: 12px;
}

</style>
