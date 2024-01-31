import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import PanierVue from '../views/PanierVue.vue'
// import PanierVue from '.../views/PanierVue.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/panier',
    name: 'panier',
    component: PanierVue,
  },
  
  // {
  //   path: '/panier',
  //   name: 'panier',
  //   component: PanierVue
  // }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
