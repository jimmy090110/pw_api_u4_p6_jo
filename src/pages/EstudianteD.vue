<template>
  <div class="container">
    <h2>Estudiante</h2>
    <form class="form" action="">
      <p type="Nombre:"><input type="text" /></p>
      <p type="Apellido:"><input type="text" /></p>
      <p type="Cédula:"><input v-model="cedula" type="text" /></p>
      <p type="Fecha Nacimiento:"><input type="text" /></p>
      <div class="boton">
        <button  @click="consultar" >Buscar</button>
        <button>actualizar</button>
      </div>
    </form>
  </div>
</template>

<script>
import {obtenerPorCedulaAxiosFachada, actualizarFachada}  from '../clients/clienteEstudiante.js';
export default {
  data(){
    cedula:null


  },
  methods:{
    consultar(){
      console.log(this.cedula);

    }
  }
};
</script>

<style>
body{
  background: #7da7a3;

}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
p:before {
  margin-top: 30px;
  content: attr(type);
  grid-template-columns: 150px;
}
.form {
  margin-top: 30px;
  display: grid;
  grid-template-columns: 190px;
  grid-template-rows: repeat(4, 60px);
  padding: 30px;
  border: solid 2px black;
  border-radius: 20px;
  background: white;
}
.boton {
  justify-content: center;
  display: flex;
  flex-direction: row;
  
}

button {
  margin-left: 10px;
  margin-right: 10px;
  font-size: 16px;
}
</style>