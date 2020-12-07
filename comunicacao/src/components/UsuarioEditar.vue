<template>
  <div class="componente">
    <h2>Alterar os Dados de Usuário</h2>
    <p>Edite as informações</p>
    <p>
      Idade = <strong>{{ idade }}</strong>
    </p>
  </div>
</template>

<script>
// import barramento from '@/barramento'

export default {
  props: {
    idade: Number
  }
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #98b99a;
  color: #fff;
}
</style>
