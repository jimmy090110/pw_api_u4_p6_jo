<template>
  <NavBar />
  <router-view/>
</template>

<script>
import NavBar from '../src/components/NavBar.vue'
import BienvenidaPage from './pages/BienvenidaPage.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>
<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
