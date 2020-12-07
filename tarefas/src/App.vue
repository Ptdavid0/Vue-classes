<template>
  <div id="app">
    <h1>Tarefas</h1>
    <form @submit="tarefas.push">
      <input type="text" v-model="tarefas" />
    </form>

    <p v-for="things in tarefas" :key="things">
      {{ things }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tarefas: []
    };
  }
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
