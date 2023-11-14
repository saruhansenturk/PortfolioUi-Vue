import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        redirect: { name: "home" }
    },
    {
        path: "/article",
        redirect: { name: "home" }
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
    {
        path: "/home",
        name: "home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
    },
    {
        path: "/programminglanguage",
        name: "programminglanguage",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "about" */ "../views/ProgrammingLanguageView.vue"
            ),
    },
    {
        path: "/programminglanguagetech",
        name: "programminglanguagetech",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "about" */ "../views/ProgrammingLanguageTechView.vue"
            ),
    },
    {
        path: "/article/:itemId",
        name: "article",
        params: true,
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(
                /* webpackChunkName: "about" */ "../views/ArticleView.vue"
            )
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});


export default router;
