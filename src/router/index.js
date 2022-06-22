import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
	{ // 8-镂空文本
	  path: '/text',
	  name: 'text',
	  component: () => import('../views/hollowText/text.vue')
	},
	{ // 1-弹弹球
	  path: '/ball',
	  name: 'ball',
	  component: () => import('../views/ball/ball.vue')
	},
	{ // 41-canvas基础
	  path: '/canvas',
	  name: 'canvas',
	  component: () => import('../views/canvas/canvas.vue')
	},
	{ // 9-文字路径
	  path: '/font',
	  name: 'font',
	  component: () => import('../views/textPath/font.vue')
	},
	{ // 28-长影子
	  path: '/long',
	  name: 'long',
	  component: () => import('../views/shadow/long.vue')
	},
	{ // 2-旋转的骰子
	  path: '/dice',
	  name: 'dice',
	  component: () => import('../views/photoalbum/dice.vue')
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
