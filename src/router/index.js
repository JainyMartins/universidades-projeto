import Vue from 'vue'
import VueRouter from 'vue-router'
import MeuInicio from '../views/MeuInicio.vue'
import ListaUniversidades from '../views/ListaUniversidades.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MeuInicio',
    component: MeuInicio
  },
  {
    path: '/listauniversidades',
    name: 'ListaUniversidades',
    component: ListaUniversidades
  },
]

const router = new VueRouter({
  routes
})

export default router
