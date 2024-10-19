import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "MainView",
            component: () => import("@/app/views/MainView.vue")
        }
    ]
});

export default router;
