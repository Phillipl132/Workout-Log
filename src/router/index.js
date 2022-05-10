import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import AddView from '../views/AddView.vue'
import DeleteView from '../views/DeleteView.vue'
import UpdateView from '../views/UpdateView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:userId/list',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: LoginView
  },
  {
    path: '/:userId/add',
    name: 'add',
    // route level code-splitting
    // this generates a separate chunk (add.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AddView
  },
  {
    path: '/delete',
    name: 'delete',
    // route level code-splitting
    // this generates a separate chunk (delete.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: DeleteView
  },
  {
    path: '/update',
    name: 'update',
    // route level code-splitting
    // this generates a separate chunk (update.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: UpdateView
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
