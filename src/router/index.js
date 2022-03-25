import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp/SignUp.vue'
import SignUpGeneral from '../views/SignUp/SignUpGeneral.vue'
import Landing from '../views/Landing/Landing.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: "/registro/:type",
    name: "SignUp",
    component: SignUp, 
  },
  {
    path: "/registro",
    name: "SignUpGeneral",
    component: SignUpGeneral, 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
