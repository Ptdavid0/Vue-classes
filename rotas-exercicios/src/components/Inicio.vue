<template>
  <div class="inicio">
    <h2>Inicio</h2>
    <hr />
    <button warning @click="irParaUsuario">Users</button>
  </div>
</template>

<script>
export default {
  methods: {
    irParaUsuario() {
      this.$router.push({ path: "/usuario" });
    }
  }
};
</script>

<style></style>
