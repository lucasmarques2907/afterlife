<template>
    <footer>
        <div class="footer d-flex flex-column">
            <div class="textos">
                <p class="textoFooterInicio"><b>CONTATO</b> contato@afterlife.com.br</p>
                <p class="separador">|</p>
                <p class="textoFooterFim">&copy;AFTERLIFE | TODOS OS DIREITOS RESERVADOS</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>


footer {
    background-color: #617A95;
    padding: 0px 0 20px 0;
    text-align: center;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    padding-top: 20px;
    text-align: center;
    margin-top: calc(100vh + 76px);
}

footer p {
    color: #fff;
    margin-bottom: 0;
    letter-spacing: 0.5px;
    font-size: 12px;
}

.textoFooterInicio {
    width: 284.94px;
}

@media screen and (max-width: 767px) {
    .separador {
        display: none;
    }

    .textoFooterInicio,
    .textoFooterFim {
        flex: 0 0 auto;
        width: 100%;
    }
}

@media screen and (min-width: 768px){
    .textos{
        justify-content: space-around;
        display: flex;
    }
}
</style>