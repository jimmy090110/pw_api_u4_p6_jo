<template>
  <div class="container">
    <h2>Guardar</h2>

    <label for="nombre">Nombre:</label>
    <input v-model="nombre" type="text" id="nombre" />

    <label for="apellido">Apellido:</label>s
    <input v-model="apellido" type="text" id="apellido" />

    <label for="cedula">Cedula:</label>
    <input v-model="cedula" type="text" id="cedula" />

    <label for="fechaNacimiento">Fecha Nacimiento:</label>
    <input v-model="fechaNacimiento" type="text" id="fechaNacimiento" />

    <div class="boton">
      <button @click="guardar">Guardar</button>
    </div>
  </div>
</template>

<script>
import { guardarFachada } from "../clients/clienteEstudiante";
export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
      fechaNacimiento: null,
    };
  },
  methods: {
    async guardar() {
      const estudianteBody = {
        nombre: this.nombre,
        apellido: this.apellido,
        cedula: this.cedula,
        fechaNacimiento: this.fechaNacimiento,
      };
      const data = await guardarFachada(estudianteBody);
      console.log(data);
      console.log("estudiante guardado");
    },
  },
};
</script>

<style>
body {
  background: #548266;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
label {
  margin-top: 30px;
  display: block;
  font-weight: bold;
}
input {
  margin-bottom: 15px;
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
