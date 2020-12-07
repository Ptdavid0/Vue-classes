<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Nome do usuario: <strong>{{ inverterNome() }}</strong>
    </p>
    <p>Nome Referenciado: {{ nomeFixo }}</p>
    <p>
      Idade = <strong>{{ idade }}</strong>
    </p>

    <!-- Buttons -->
    <button @click="reiniciarNome">Resetar</button>
    <button @click="resetName">Callback</button>
    <button @click="changeAge">ADD 5</button>
  </div>
</template>

<script>
export default {
  props: {
    nome: {
      type: String, //Deve ser do tipo String
      //   required: true  Presenca obrigatoria
      default: "Sem valor passado"
    },
    resetName: Function, //Callback
    idade: Number,
    changeAge: Function
  },
  data() {
    return {
      nomeFixo: this.nome
    };
  },
  methods: {
    inverterNome() {
      return this.nome
        .split("")
        .reverse()
        .join("");
    },
    reiniciarNome() {
      this.nome = "Pedro";
      this.$emit("nomeMudou", this.nome);
    }
  }
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
