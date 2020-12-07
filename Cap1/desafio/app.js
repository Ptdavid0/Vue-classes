new Vue({
  el: "#desafio",
  data: {
    name: "Pedro",
    age: 20,
    link: "https://www.bigstockphoto.com/images/homepage/module-6.jpg"
  },
  methods: {
    randomN() {
      return Math.random();
    },
    multiAge() {
      return this.age * 3;
    }
  }
});
