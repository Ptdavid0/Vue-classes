new Vue({
  el: "#desafio",
  data: {
    valor: ""
  },
  methods: {
    exibirAlert() {
      alert("Pressed");
    },
    saveKey(event) {
      this.valor = event.target.value;
    }
  }
});
