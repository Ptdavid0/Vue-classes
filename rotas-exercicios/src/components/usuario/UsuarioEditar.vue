<template>
  <div class="usuario-editar">
    <hr />
    <h3>Usuario Editar</h3>
    <hr />
    <p><strong>Codigo:</strong> {{ id }}</p>
    <!-- <p><strong>Codigo:</strong> {{ $route.params.id }}</p>  Same as Above-->

    <!-- Using Query '?' -->
    <p>
      <strong>Lingua: {{ $route.query.lingua }}</strong>
    </p>
    <p>
      <strong>Completo: {{ $route.query.completo ? "Sim" : "Nao" }}</strong>
    </p>
    <hr />

    <button primario @click="confirmar = true">Confirmar</button>
    <hr />
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      confirmar: false
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.confirmar) {
      next();
    } else {
      if (confirm("Tem Certeza Maluco?")) {
        next();
      } else {
        next(false);
      }
    }
  }
};
</script>

<style></style>
