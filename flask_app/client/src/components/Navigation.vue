<template>
  <div>
    <vs-navbar v-model="activeItem" class="nabarx">
      <div slot="title">
        <vs-navbar-title>
          Hello world
        </vs-navbar-title>
      </div>

      <vs-navbar-item :index="index" v-for="(routes, index) in links" :key="index">
        <router-link :to="`${routes.page}`">{{routes.text}}</router-link>
      </vs-navbar-item>
    </vs-navbar>
  </div>


</template>

<script>
export default {
  name: 'Navigation',
  data(){
    return {
      activeItem: false,
      links: [
          {
            id: 0,
            text: 'Hello World',
            page:'/HelloWorld'
          },
          {
            id: 1,
            text: 'Home',
            page:'/Home'
          },
          {
            id: 2,
            text: 'About',
            page:'/About'
          },
          {
            id: 3,
            text: 'Contact',
            page:'/Contact'
          }
        ]
    }
  }
}
</script>

<style> 
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>