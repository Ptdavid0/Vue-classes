<template>
  <v-app>
    <v-navigation-drawer app>
      <!-- toolbar flat -->
      <ToolBarF />
      <!-- divider -->
      <v-divider></v-divider>
      <!-- list -->
      <List />
    </v-navigation-drawer>

    <!-- Toolbar -->
    <ToolBarA />
    <!-- Content -->

    <Content />
    <!-- Footer -->
    <Footer />
  </v-app>
</template>

<script>
//Local Use
// import ToolBarF from "./ToolbarF.vue";
// import List from "./List.vue";
// import ToolBarA from "./ToolbarA.vue";
// import Content from "./Content.vue";
// import Footer from "./Footer.vue";

export default {
  //Local Use
  //   components: {
  //     ToolBarF,
  //     List,
  //     ToolBarA,
  //     Content,
  //     Footer
  //Estes serao os nomes dos componetes que vc ira usar na hora de declarar <>
  //   }
};
</script>
