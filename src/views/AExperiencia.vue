<script lang="ts">
import { defineComponent } from "vue";
import Banner from "../components/Banner.vue";

export default defineComponent({
  name: "AExperiencia",
  components: {
    Banner,
  },
});
</script>

<template>
  <main>
    <Banner page="aExperiencia" />
    <section class="container">
      <div class="conteudo">
        <div class="imagem acessibilidade"></div>
        <div class="infos">
          <h2 class="titulo">Acessibilidade e Inclusão</h2>
          <p class="descricao">
            Nosso evento tenta abraçar um público mais amplo em todos os
            sentidos, de todas as idades, corpos, gostos e pensamentos! Isso
            está presente no espaço físico, na sinalização, no treinamento da
            equipe de apoio, na comunicação em libras, braile, visual e tátil.
            Além disso, dispomos de ingressos gratuitos para pessoas com
            deficiência e acompanhantes, pessoas idosas e crianças!
          </p>
        </div>
      </div>
      <div class="conteudo">
        <div class="imagem sustentabilidade"></div>
        <div class="infos direita">
          <h2 class="titulo">Sustentabilidade</h2>
          <p class="descricao">
            Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso,
            levamos o futuro do nosso planeta a sério. Nosso festival é carbono
            zero, com utilização de copos retornáveis, coleta e destinação
            adequada de resíduos, e transporte coletivo.
          </p>
        </div>
      </div>
      <div class="conteudo">
        <div class="imagem atracoes"></div>
        <div class="infos">
          <h2 class="titulo">Atrações</h2>
          <p class="descricao">
            Intervenções artísticas e culturais para todos os gostos! Durante os
            intervalos dos shows, nossa experiência contará com recreação para
            crianças, oficina de cerâmica, origami, circo e aquarela! Além
            disso, nosso espaço contra com 3 praças de alimentação, roda gigante
            e outros brinquedos!
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.container {
  padding: 2rem 1.5rem;
}

.conteudo:not(:first-child) {
  padding-top: 2rem;
}

.imagem {
  height: 381px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.acessibilidade {
  background-image: url("../assets/images/mobile/imagens/a-experiencia-1.png");
}

.sustentabilidade {
  background-image: url("../assets/images/mobile/imagens/a-experiencia-2.png");
}

.atracoes {
  background-image: url("../assets/images/mobile/imagens/a-experiencia-3.png");
}

.infos {
  padding: 2rem 0;
  text-align: center;
}

.titulo {
  font-size: 2rem;
  font-weight: 700;
  line-height: 37.57px;
}

.descricao {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 40px;
}

@media screen and (min-width: 768px) {
  .container {
    padding: 2rem 3.5rem;
  }

  .conteudo {
    padding: 0 1.21875rem;
  }

  .imagem {
    border-radius: 1rem;
  }

  .acessibilidade {
    background-image: url("../assets/images/tablet/imagens/a-experiencia-1.png");
  }

  .sustentabilidade {
    background-image: url("../assets/images/tablet/imagens/a-experiencia-2.png");
  }

  .atracoes {
    background-image: url("../assets/images/tablet/imagens/a-experiencia-3.png");
  }
}

@media screen and (min-width: 1440px) {
  .container {
    padding: 4rem 7.59375rem;
  }

  .conteudo {
    display: flex;
    flex-direction: row-reverse;
    gap: 3rem;
  }

  .conteudo:not(:nth-child(2)) {
    flex-direction: row;
  }
  .imagem {
    width: 50%;
  }

  .acessibilidade {
    background-image: url("../assets/images/desktop/imagens/a-experiencia-1.png");
  }

  .sustentabilidade {
    background-image: url("../assets/images/desktop/imagens/a-experiencia-2.png");
  }

  .atracoes {
    background-image: url("../assets/images/desktop/imagens/a-experiencia-3.png");
  }

  .infos {
    width: 50%;
    text-align: left;
  }

  .direita {
    text-align: right;
  }

  .descricao {
    padding-top: 1.5rem;
  }
}
</style>
