import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Questions from '../views/Questions.vue'
import Results from '../views/Results.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/questions',
    name: 'Questions',
    component: Questions
  },
  {
    path: '/results',
    name: 'Results',
    component: Results
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
