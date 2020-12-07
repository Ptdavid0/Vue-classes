<template>
  <div id="app" class="container">
    <h1>HTTP com Axios</h1>

    <!-- Alertas -->

    <b-alert
      show
      dismissible
      v-for="mensagem in mensagens"
      :key="mensagem.texto"
      :variant="mensagem.tipo"
    >{{mensagem.texto}}</b-alert>

    <!-- Formulario -->

    <b-card>
      <b-form-group label="Nome:">
        <b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Name"></b-form-input>
      </b-form-group>
      <b-form-group label="E-mail:">
        <b-form-input type="text" size="lg" v-model="usuario.email" placeholder="E-mail"></b-form-input>
      </b-form-group>
      <hr />
      <b-button @click="salvar" variant="primary" size="lg">Salvar</b-button>

      <b-button @click.prevent="obterUsers" size="lg" variant="success" class="ml-2">Obter Users</b-button>
    </b-card>
    <hr />

    <!-- Lista de Users -->

    <b-list-group>
      <b-list-group-item v-for="(user,id) in usuarios" :key="id">
        <p>Nome: {{user.nome}}</p>
        <p>Email: {{user.email}}</p>
        <p>ID: {{id}}</p>
        <b-button variant="warning" size="lg" @click="carregar(id)">Carregar</b-button>
        <b-button variant="danger" size="lg" @click="deletar(id)" class="ml-2">Deletar</b-button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      mensagens: [],
      usuarios: [],
      usuario: {
        nome: "",
        email: ""
      }
    };
  },
  methods: {
    //   Tipo Post
    salvar() {
      const metodo = this.id ? "patch" : "post";
      const finalUrl = this.id ? `/${this.id}.json` : ".json";
      this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
        .then(() => {
          this.limpar();
          this.mensagens.push({
            texto: "Perfection",
            tipo: "success"
          });
        })
        .catch(err => {
          alert(err);
        });
    },
    // Tipo Get
    obterUsers() {
      this.$http
        .get("usuarios.json")
        .then(res => {
          this.usuarios = res.data;
        })
        .catch(err => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
    },
    limpar() {
      this.usuario.email = "";
      this.usuario.nome = "";
      this.id = null;
      this.mensagens = [];
    },
    carregar(id) {
      this.id = id;
      this.usuario = { ...this.usuarios[id] };
    },
    deletar(id) {
      this.$http
        .delete(`/usuarios/${id}.json`)
        .then(() => this.limpar())
        .catch(() => {
          this.mensagens.push({
            texto: "Houston we have a BUG",
            tipo: "danger"
          });
        });
    }
  }

  //   created() {
  //     this.$http
  //       .post("usuarios.json", {
  //         nome: "Joao",
  //         email: "Joao@gmail.com"
  //       })
  //       .then(res => {
  //         // eslint-disable-next-line no-console
  //         console.log(res);
  //       })
  //       .catch(err => {
  //         // eslint-disable-next-line no-console
  //         console.log(err);
  //       });
  //   }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.5rem;
}

#app h1 {
  text-align: center;
  margin: 50px;
}
</style>
