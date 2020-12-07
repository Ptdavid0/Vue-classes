import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  //State compartilhado
  state: {
    produtos: [],
    quantidade: 2,
    preco: 19.99
  },

  getters: {
    valorTotal(state) {
      return state.produtos
        .map(p => p.quantidade * p.preco)
        .reduce((total, atual) => total + atual, 0);
    }
  },
  mutations: {
    adicionarProduto(state, payload) {
      state.produtos.push(payload);
    },
    setQuantidade(state, payload) {
      state.quantidade = payload;
    },
    setPreco(state, payload) {
      state.preco = payload;
    }
  },
  //   Nao recebe o state, pois nao tem como uma de suas funcoes altera-lo
  actions: {
    adicionarProduto(context, payload) {
      setTimeout(() => {
        context.commit("adicionarProduto", payload);
      }, 1000);
    }
  }
});

//Nos componentes, o getters(mapGetters) vai dentro do computed, ja os mutations(mapMutations) vai dentro dos methods

//Lembrando que os get e mutation estao sempre relacionados com o state
