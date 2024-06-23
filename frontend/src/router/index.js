//Pra adicionar outra página:
//Importa a view
//Adiciona na const routes
//Pronto

import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
