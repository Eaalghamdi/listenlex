import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


import ALexHome from '../views/ALexHome.vue'
import ALexInstruction from '../views/ALexInstruction.vue' 
import ALexExperiment from '../views/ALexExperiment.vue' 
import ALexFinish from '../views/ALexFinish.vue'

import XLexHome from '../views/XLexHome.vue'
import XLexInstruction from '../views/XLexInstruction.vue' 
import XLexExperiment from '../views/XLexExperiment.vue' 
import XLexFinish from '../views/XLexFinish.vue'

import LexHome from '../views/LexHome.vue'
import LexInstruction from '../views/LexInstruction.vue'
import LexExperiment from '../views/LexExperiment.vue'
import LexFinish from '../views/LexFinish.vue'


import Admin from '../views/Admin.vue'
import AdminAlex from '../views/AdminAlex.vue'
import AdminXlex from '../views/AdminXlex.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/ALex',
    name: 'ALex',
    component: ALexHome,
  },
  {
    path: '/A-lex_instrction',
    name: 'ALexInstruction',
    component: ALexInstruction,
  },
  {
    path: '/A-Lex_experiment',
    name: 'ALexExperiment',
    component: ALexExperiment,
  },
  {
    path: '/A-Lex_finish',
    name: 'ALexFinish',
    component: ALexFinish,
  },

  {
    path: '/X-Lex',
    name: 'XLex',
    component: XLexHome,
  },
  {
    path: '/X-lex_instrction',
    name: 'XLexInstruction',
    component: XLexInstruction,
  },

  {
    path: '/X-Lex_experiment',
    name: 'XLexExperiment',
    component: XLexExperiment,
  },
  {
    path: '/X-Lex_finish',
    name: 'XLexFinish',
    component: XLexFinish,
  },



  {
    path: '/listenlex',
    name: 'ListenLex',
    component: LexHome,
  },
  {
    path: '/ListenLex_instruction',
    name: 'ListenLexInstruction',
    component: LexInstruction,
  },

  {
    path: '/ListenLex_experiment',
    name: 'ListenLexExperiment',
    component: LexExperiment,
  },
  {
    path: '/ListenLex_finish',
    name: 'ListenLexFinish',
    component: LexFinish,
  },


  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
  },
  {
    path: '/adminalex',
    name: 'ALexData',
    component: AdminAlex,
  },
  {
    path: '/adminXlex',
    name: 'XLexData',
    component: AdminXlex,
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
