import { createRouter, createWebHistory } from 'vue-router'
import TriviaView from '../views/TriviaView.vue'

const routes = [
  {
    path: '/',
    name: 'Trivia',
    component: TriviaView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
