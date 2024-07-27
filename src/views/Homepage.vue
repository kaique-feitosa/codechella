<script lang="ts">
import { defineComponent } from "vue";
import Sobre from "../components/Sobre.vue";
import LineUp from "../components/LineUp.vue";
import Banner from "../components/Banner.vue";

export default defineComponent({
  name: "Homepage",
  components: {
    Banner,
    Sobre,
    LineUp,
  },
});
</script>

<template>
  <Banner page="homepage" />
  <main>
    <Sobre />
    <LineUp />
    <div class="banner-rodape"></div>
  </main>
</template>

<style scoped>
.banner-rodape {
  background-image: url("../assets/images/mobile/imagens/banner-homepage.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  mix-blend-mode: multiply;
  height: 338px;
  width: 100%;
}

@media screen and (min-width: 768px) {
  .banner-rodape {
    background-image: url("../assets/images/tablet/imagens/homepage-2.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    mix-blend-mode: multiply;
    height: 338px;
  }
}

@media screen and (min-width: 1440px) {
  .banner-rodape {
    background-image: url("../assets/images/desktop/imagens/homepage-imagem-2.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 338px;
    mix-blend-mode: multiply;
  }
}
</style>
