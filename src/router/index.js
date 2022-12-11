import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DefaultPage from "../components/DefaultPage.vue";
import PostsPage from "../components/PostsPage.vue";
import StopWatch from "../components/StopWatch.vue";
import ToDoPage from "../components/ToDoPage.vue";
import AdminView from "../admin/AdminView.vue";
import ProductsView from "../admin/ProductsView.vue";
import ProductCreate from "../admin/ProductCreate.vue";
import ProductEdit from "../admin/ProductEdit.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/admin",
    name: "AdminView",
    component: AdminView,
    children: [
      {
        path: "products",
        name: "ProductsView",
        component: ProductsView,
      },
      {
        path: "products/create",
        name: "ProductCreate",
        component: ProductCreate,
      },
      {
        path: "products/:id/edit",
        name: "ProductEdit",
        component: ProductEdit,
        props: true,
      },
    ],
  },
  {
    path: "/DefaultPage",
    name: "DefaultPage",
    component: DefaultPage,
  },
  {
    path: "/PostsPage",
    name: "PostsPage",
    component: PostsPage,
  },
  {
    path: "/StopWatch",
    name: "StopWatch",
    component: StopWatch,
  },
  {
    path: "/ToDoPage",
    name: "ToDoPage",
    component: ToDoPage,
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
