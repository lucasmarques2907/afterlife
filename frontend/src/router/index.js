//Pra adicionar outra página:
//Importa a view
//Adiciona na const routes
//Pronto

import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Admin from "../views/Admin.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Admin",
        name: "Admin",
        component: Admin,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
