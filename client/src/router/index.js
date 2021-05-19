import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Instruction from '../views/Instruction.vue'
import Experiment from '../views/Experiment.vue'
import Finish from '../views/Finish.vue'
import Admin from '../views/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/instruction',
    name: 'instruction',
    component: Instruction,
  },

  {
    path: '/experiment',
    name: 'experiment',
    component: Experiment,
  },
  {
    path: '/finish',
    name: 'finish',
    component: Finish,
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
