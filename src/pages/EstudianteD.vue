<template>
  <div class="container">
    <h2>Estudiante</h2>
    <p type="Nombre:"><input v-model="nombre" type="text" /></p>
    <p type="Apellido:"><input v-model="apellido" type="text" /></p>
    <p type="Cedula:"><input v-model="cedula" type="text" id="cedula" /></p>
    <p type="Fecha Nacimiento:"><input v-model="fecha" type="text" /></p>
    <div class="boton">
      <button @click="consultar">Buscar</button>
      <button @click="actualizar">actualizar</button>
    </div>
  </div>
</template>

<script>
import {
  obtenerPorCedulaAxiosFachada,
  actualizarFachada,
} from "../clients/clienteEstudiante.js";
export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
      fecha: null,
      genero: null,
      cedula: null,
    };
  },
  methods: {
    async consultar() {
      console.log(this.cedula);
      const data = await obtenerPorCedulaAxiosFachada(this.cedula);
      this.nombre=data.nombre
      this.apellido=data.apellido
      this.fecha=data.fechaNacimiento

      console.log(data);
      console.log(data.nombre);
      console.log(data.apellido);
    },
    async actualizar() {
      const bodyEstudiante = {
        nombre: this.nombre,
        apellido: this.apellido,
        fecha: this.fecha,
        genero: this.genero,
        cedula: this.cedula,
      };
      const data = await actualizarFachada(this.cedula, bodyEstudiante);
      console.log(data);
    },
  },
  created(){
    console.log(this.$route)
    if(this.$route.params.cedula !== 'vacio' ){
      this.cedula=this.$route.params.cedula;
      this.consultar();
      
    }
   
  }
};
</script >

<style >
body {
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