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
                    <v-list-item v-for="(item, index) in items" :key="index" @click="opcaoSelecionada(index)">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
    </div>
</template>

<script>

export default {
    name: 'Navbar',
    data() {
        return {
            drawer: false,
            items: [
                {
                    title: 'Configurar conta',
                },
                {
                    title: 'Sair',
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
        opcaoSelecionada(index){
            let opcao = this.items[index].title;
            switch (opcao){
                case 'Configurar conta':
                    console.log('Selecionou configurar conta')
                    break
                case 'Sair':
                    console.log('Selecionou sair')
                    break
            }
        }
    },
}
</script>

<style>
.navbar-brand img {
    max-width: 200px;
}
</style>