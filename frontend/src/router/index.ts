import {createRouter, createWebHistory, RouteRecordRaw, RouterOptions} from 'vue-router'
import Layout from '@/components/Layout.vue'
import Main from "@/views/Main.vue";
import Home from "@/views/Home.vue";

const routes = <Array<RouteRecordRaw>>[
  {path: '/', name: 'layout', component: Layout, redirect: {name: 'home'},
    children: [
      {path: 'home', name: 'home', component: Home},
      {path: 'main', name: 'main', component: Main},
    ]
  },
  {path: '/:pathMatch(.*)*', redirect : 'home'}
]

const router = createRouter(<RouterOptions>{
  history: createWebHistory(),
  routes
})

export default router
