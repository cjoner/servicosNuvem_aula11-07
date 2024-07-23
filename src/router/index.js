import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import TextoPrincipal from '@/components/TextoPrincipal.vue'
import ImagensDiversas from '@/components/ImagensDiversas.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/texto',
      name: 'TextoPrincipal',
      component: TextoPrincipal
    },
    {
      path: '/imagens',
      name: 'ImagensDiversas',
      component: ImagensDiversas
    }
  ]
})
