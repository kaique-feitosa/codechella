<script lang="ts">
import { defineComponent } from "vue";
import Cabecalho from "./components/Cabecalho.vue";
import Rodape from "./components/Rodape.vue";

export default defineComponent({
  name: "App",
  components: {
    Cabecalho,
    Rodape,
  },
});
</script>

<template>
  <Cabecalho />
  <router-view></router-view>
  <Rodape />
</template>

<style>
main {
  background-image: var(--gradiente-boreal);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
