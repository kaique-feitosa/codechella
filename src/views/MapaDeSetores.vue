<script lang="ts">
import { defineComponent } from "vue";
import Banner from "../components/Banner.vue";
import Mapa from "../components/Mapa.vue";
import Setores from "../components/Setores.vue";

export default defineComponent({
  name: "MapaDeSetores",
  components: {
    Banner,
    Mapa,
    Setores,
  },
});
</script>

<template>
  <main>
    <Banner page="mapaDeSetores" />
    <Mapa />
    <Setores />
  </main>
</template>
