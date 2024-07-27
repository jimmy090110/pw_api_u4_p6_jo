<template>
  <div>
    <router-link to="/">Bienvenida</router-link>

    <!--<router-link :to="{path: '/estudiante/actualizar/1234/?edad=14">Estudiante actualizar</router-link>-->
    <router-link
      :to="{
        name: 'prueba', 
        params: {cedula:'1234'}
        , query:{edad:15,ciudad:'Quito'}}"
      >Estudiante actualizar</router-link
    >

    <router-link to="/estudiante/eliminar">Estudiante Eliminar</router-link>
    <router-link to="/estudiante/guardar">Estudiante guardar</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  padding: 0px 30px;
}
div a {
  color: aqua;
  margin: 0px 10px;
}
</style>