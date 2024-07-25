<template>
  <div class="container">
    <h2>Eliminar</h2>

    <p type="Cedula:"><input v-model="cedula" type="text" /></p>
    <div class="boton">
      <button @click="eliminar" >Eliminar</button>
    </div>
  </div>
</template>

<script>
import { eliminarFachada } from "../clients/clienteEstudiante.js";
export default {
  data() {
    return {
      cedula: null,
    };
  },
  methods: {
    async eliminar() {
      console.log(this.cedula);
      const data = await eliminarFachada(this.cedula);
      console.log(data);
    },
  },
};
</script>

<style>
body {
  background: #a35648;
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