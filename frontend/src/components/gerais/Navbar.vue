<template>
    <div>
        <v-app-bar>
            <v-app-bar-title>
                <a class="navbar-brand" href="#">
                    <img src="../../assets/imgs/AfterlifeLogoCompleta.jpeg" class="pt-1" alt="Afterlife Logo">
                </a>
            </v-app-bar-title>
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn icon="mdi-account" v-bind="props">
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="(item, index) in items" :key="index" value="item"
                        @click="opcaoSelecionada(index)">
                        <template v-slot:prepend>
                            <v-icon :icon="item.icon" color="#4d6279"></v-icon>
                        </template>
                        <v-list-item-title> {{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
    </div>
</template>

<script>

import router from '@/router';
import Swal from 'sweetalert2';

export default {
    name: 'Navbar',
    data() {
        return {
            drawer: false,
            items: [
                {
                    title: 'Configurar conta',
                    icon: 'mdi-cog',

                },
                {
                    title: 'Sair',
                    icon: 'mdi-logout',

                }
            ]
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
        opcaoSelecionada(index) {
            let opcao = this.items[index].title;
            switch (opcao) {
                case 'Configurar conta':
                    console.log('Selecionou configurar conta')
                    break
                case 'Sair':
                    Swal.fire({
                        title: "Deseja sair da sua conta?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#91C141",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Sim",
                        reverseButtons: true,
                        cancelButtonText: "Não",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire({
                                title: "Você saiu da sua conta",
                                text: "Retornando à página inicial",
                                icon: "success",
                                timer: 2500,
                                timerProgressBar: true,
                                showConfirmButton: false,
                            }).then(() => {
                                router.push({ path: '/' })
                            });
                        }
                    });
                    // router.push({
                    //     path: '/'
                    // })
                    break
            }
        }
    },
}
</script>

<style scoped>
.navbar-brand img {
    max-width: 200px;
}

:deep(.v-list-item__spacer) {
    width: 16px !important; /* Ajuste o valor conforme necessário */
}
</style>