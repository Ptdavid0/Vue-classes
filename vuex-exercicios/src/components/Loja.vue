<template>
  <Painel titulo="Loja Virtual" verde>
    <div class="loja">
      <span>Adicionar</span>
      <input type="number" v-model.number="quantidade" />
      <span>itens de <strong>R$</strong></span>
      <input type="number" v-model.number="preco" />
      <button @click="adicionar">Adicionar</button>
      <button @click="retirar">Retirar</button>
      <button @click="reload">Resetar</button>
    </div>
  </Painel>
</template>

<script>
// import { mapActions } from "vuex"; (*)

export default {
  data() {
    return {
      sequencia: 1
    };
  },
  computed: {
    quantidade() {
      return this.$store.state.quantidade;
    },
    preco() {
      return this.$store.state.preco;
    }
  },
  methods: {
    // ...mapActions(["adicionarProduto"]), (*)
    //                          ||
    // O codigo abaixo representa o funcionamento do mapAct acima-
    //                         ||
    // adicionarProduto(produto){
    //     this.$store.dispatch('adicionarProduto',produto)
    // }

    adicionar() {
      const produto = {
        id: this.sequencia,
        nome: `Produto ${this.sequencia}`,
        quantidade: this.quantidade,
        preco: this.preco
      };
      this.sequencia++;

      //Chamando o set/mutation
      this.$store.dispatch("adicionarProduto", produto);

      //   this.adicionarProduto(produto); (*)
      //   this.$store.commit("adicionarProduto", produto);
      //   this.$store.state.produtos.push(produto);
    },

    // Learning(extra)
    retirar() {
      this.$store.state.produtos.pop();
      this.sequencia--;
    },
    reload() {
      this.$store.state.produtos = [];
      this.sequencia = 1;
    }
  }
};
</script>

<style>
.loja {
  display: flex;
  justify-content: center;
}

.loja > * {
  margin: 0px 10px;
}

input {
  font-size: 2rem;
  width: 90px;
}
</style>
