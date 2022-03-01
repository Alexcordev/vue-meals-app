import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '../views/CategoryView.vue'
import DetailsView from '../views/DetailsView.vue'
import HomeRecipeView from '../views/HomeRecipeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeRecipeView
  },
  {
    path: '/all-categories',
    name: 'categories',
    component: HomeView
  },
  {
    path: '/category/:meals',
    name: 'category',
    component: CategoryView
  },
  {
    path: '/details/:id',
    name: 'details',
    component: DetailsView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
