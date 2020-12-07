new Vue({
  el: "#desafio",
  data: {
    trocar: false,
    classeCSS: "bold"
  },

  methods: {
    iniciarEfeito() {
      setInterval(() => {
        this.trocar = !this.trocar;
      }, 1000);
    },
    iniciarProgresso() {}
  }
});
