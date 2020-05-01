import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Ping from '../components/Ping.vue';
import About from '../components/About';
import Contact from '../components/Contact';
import HelloWorld from '../components/HelloWorld';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { 
      path: '/HelloWorld', 
      name: 'HelloWorld', 
      component: HelloWorld 
    },
    { 
        path: '/', 
        name: 'Home', 
        component: Home 
    },
    {
      path: '/ping',
      name: 'Ping',
      component: Ping,
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ],
});