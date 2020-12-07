<template>
  <v-toolbar flat>
    <v-list>
      <v-list-tile>
        <v-list-tile-title class="title">
          Menu
        </v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      itensMenu: [
        { titulo: "Início", icon: "dashboard" },
        { titulo: "Sobre", icon: "question_answer" }
      ]
    };
  }
};
</script>

<style></style>
