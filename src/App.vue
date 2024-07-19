<template>
  <TextoPrincipal msg="Welcome to Your Vue.js App"/>
  <ImagensDiversas msg="Welcome to Your Vue.js App"/>
</template>

<script>
import ImagensDiversas from './components/ImagensDiversas.vue'
import TextoPrincipal from './components/TextoPrincipal.vue';


export default {
  name: 'App',
  components: {
    TextoPrincipal,
    ImagensDiversas
    
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

