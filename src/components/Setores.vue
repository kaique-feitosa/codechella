<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Setores",
});
</script>

<template>
  <section class="setores">
    <h2 class="titulo">Mais detalhes sobre os setores:</h2>
    <div class="detalhes">
      <div class="setor">
        <div class="setor__imagem imagem-pista"></div>
        <h3 class="setor__titulo">Pista</h3>
        <p class="setor__descricao">
          Pista convencional, atendida pelos bares e banheiros das laterais do
          estádio. Espaço amplo, com local para sentar e descansar. Separada da
          pista premium por uma grade.
        </p>
      </div>
      <div class="setor">
        <div class="setor__imagem imagem-pista-p"></div>
        <h3 class="setor__titulo">Pista Premium</h3>
        <p class="setor__descricao">
          Pista mais próxima do palco, com acesso muito próximo a banheiros e
          bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência
          têm direito a acesso gratuito a essa área.
        </p>
      </div>
      <div class="setor">
        <div class="setor__imagem imagem-cadeiras"></div>
        <h3 class="setor__titulo">Cadeiras</h3>
        <p class="setor__descricao">
          Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e
          bares, visão um pouco elevada em relação às pistas.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.setores {
  padding: 2rem 1.5rem;
}

.titulo,
.setor__titulo {
  font-size: 2rem;
  font-weight: 700;
  line-height: 37.57px;
  text-align: center;
}

.detalhes {
  padding-top: 2rem;
}

.setor__imagem {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 16px;
  height: 239px;
}

.imagem-pista {
  background-image: url("../assets/images/mobile/imagens/mapa-de-setores-2.png");
}

.imagem-pista-p {
  background-image: url("../assets/images/mobile/imagens/mapa-de-setores-3.png");
}

.imagem-cadeiras {
  background-image: url("../assets/images/mobile/imagens/mapa-de-setores-4.png");
}

.setor__titulo {
  padding: 2rem 0;
}

.setor__descricao {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 40px;
  text-align: center;
  padding-bottom: 2rem;
}

@media screen and (min-width: 768px) {
  .setores {
    padding: 2rem 3.75rem;
  }

  .setor__imagem {
    margin: 0 auto;
    height: 239px;
    width: 382.4px;
  }

  .imagem-pista {
    background-image: url("../assets/images/tablet/imagens/mapa-de-setores-2.png");
  }

  .imagem-pista-p {
    background-image: url("../assets/images/tablet/imagens/mapa-de-setores-3.png");
  }

  .imagem-cadeiras {
    background-image: url("../assets/images/tablet/imagens/mapa-de-setores-4.png");
  }
}

@media screen and (min-width: 1440px) {
  .setores {
    padding: 3rem 7.5rem;
  }

  .titulo {
    font-size: 2.5rem;
  }

  .detalhes {
    display: flex;
    padding-top: 3rem;
    gap: 1.5rem;
  }

  .imagem-pista {
    background-image: url("../assets/images/tablet/imagens/mapa-de-setores-2.png");
  }

  .imagem-pista-p {
    background-image: url("../assets/images/tablet/imagens/mapa-de-setores-3.png");

    margin-top: 6.625rem;
  }

  .imagem-cadeiras {
    background-image: url("../assets/images/tablet/imagens/mapa-de-setores-4.png");
  }
}
</style>
