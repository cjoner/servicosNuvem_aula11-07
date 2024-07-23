<template>
  <div id="app">
    <nav>
      <router-link class= "links" to="/">Home</router-link>
      <router-link class= "links" to="/texto">Texto</router-link>
      <router-link class= "links" to="/imagens">Imagens</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.links{
  margin-right: 15px;
  
}
</style>

