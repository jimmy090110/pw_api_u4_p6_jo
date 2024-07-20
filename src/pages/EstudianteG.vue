<template>
  <div class="container">
    <h2>Guardar</h2>
    <form class="form" action="">
      <p type="Nombre:"><input type="text" /></p>
      <p type="Apellido:"><input type="text" /></p>
      <p type="Cédula:"><input type="text" /></p>
      <p type="Fecha Nacimiento:"><input type="text" /></p>
      <div class="boton">
        <button>Guardar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
body{
  background: #548266;

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