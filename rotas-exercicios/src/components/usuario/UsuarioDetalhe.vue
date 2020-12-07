<template>
  <div class="usuario-detalhe">
    <h3>Usuario Detalhe</h3>
    <hr />
    <p><strong>Codigo:</strong> {{ id }}</p>

    <router-link
      :to="{
        name: 'editarUsuario',
        params: { id },
        query: { completo: true, lingua: 'pt' }
      }"
      tag="button"
      >Editar</router-link
    >
    <hr />
  </div>
</template>

<script>
export default {
  props: ["id"],
  beforeRouteEnter(to, from, next) {
    // eslint-disable-next-line no-console
    console.log("Dentro do componente -> Usuario detalhe");
    next();
  }
};
</script>

<style></style>
