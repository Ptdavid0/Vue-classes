<template>
  <div class="usuario">
    <h2>Usuario</h2>
    <router-view></router-view>
    <button sucesso @click="irParaInicio">Voltar</button>
  </div>
</template>

<script>
export default {
  methods: {
    irParaInicio() {
      //Ways to do it
      //   this.$router.push("/");
      //   this.$router.push({ path: "/" });
      this.$router.push({ name: "inicio" });
    }
  }
};
</script>

<style></style>
