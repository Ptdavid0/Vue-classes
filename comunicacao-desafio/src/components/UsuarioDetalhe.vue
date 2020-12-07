<template>
  <div class="usuario-detalhe">
    <h2 v-if="!usuario">Usuário não selecionado!</h2>
    <div v-else>
      <h2>ID: {{ this.user.id }}</h2>
      <h2>Nome: {{ this.user.nome }}</h2>
      <h2>Idade: {{ this.user.idade }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
  data() {
    return {
      usuario: null
    };
  },
  watch: {
    user() {
      this.usuario = this.user;
    }
  }
};
</script>

<style>
.usuario-detalhe {
  flex: 1;
  border: 1px solid #ccc;
}
</style>
