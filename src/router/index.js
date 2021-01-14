import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home - KrisCatDog Portfolio',
      metaTags: [{
          name: 'description',
          content: 'The home page of KrisCatDog Portfolio.'
        },
        {
          property: 'og:description',
          content: 'The home page of KrisCatDog Portfolio.'
        }
      ]
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      title: 'About - KrisCatDog Portfolio',
      metaTags: [{
          name: 'description',
          content: 'The about page of KrisCatDog Portfolio.'
        },
        {
          property: 'og:description',
          content: 'The about page of KrisCatDog Portfolio.'
        }
      ]
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import( /* webpackChunkName: "about" */ '../views/Projects.vue'),
    meta: {
      title: 'Projects - KrisCatDog Portfolio',
      metaTags: [{
          name: 'description',
          content: 'The projects page of KrisCatDog Portfolio.'
        },
        {
          property: 'og:description',
          content: 'The projects page of KrisCatDog Portfolio.'
        }
      ]
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import( /* webpackChunkName: "about" */ '../views/Contact.vue'),
    meta: {
      title: 'Contact - KrisCatDog Portfolio',
      metaTags: [{
          name: 'description',
          content: 'The contact page of KrisCatDog Portfolio.'
        },
        {
          property: 'og:description',
          content: 'The contact page of KrisCatDog Portfolio.'
        }
      ]
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router