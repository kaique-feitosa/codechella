<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "Sobre",
});
</script>

<template>
  <section class="sobre">
    <div class="imagem"></div>
    <div class="informacoes">
      <h2 class="titulo">
        <div>< 11 e 12 de Março ></div>
        <div>Aluródromo de São Paulo</div>
      </h2>
      <p class="descricao">
        Hora de programar nossa memória com novas lembranças! Uma nova
        experiência sobre música, linguagens e, claro, tecnologia! Somos um
        festival diverso, com vários artistas e referências. Divirta-se!
      </p>
      <router-link to="/ingresso" class="botao">
        Comprar ingresso!
        <img
          src="../assets/images/icones/icone-ingresso.svg"
          alt="Ìcone de ingresso"
        />
      </router-link>
    </div>
  </section>
</template>

<style scoped>
.sobre {
  padding: 2rem 1.5rem;
}

.imagem {
  background-image: url("../assets/images/mobile/imagens/homepage-1.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 381px;
}

.informacoes {
  padding-top: 2rem;
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
  padding: 1.5rem 0;
}

.botao {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(--roxo-boreal);
  box-shadow: 4px 4px 0px 0px #444444;
  border-radius: 1rem;
  color: var(--branco);
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 40px;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: 0.4s ease;
  width: 312px;
}

.botao:hover {
  scale: 0.95;
  transition: 0.4s ease;
}

@media screen and (min-width: 768px) {
  .sobre {
    padding: 2rem 3.75rem;
  }

  .imagem {
    background-image: url("../assets/images/tablet/imagens/homepage-1.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 381px;
    border-radius: 1rem;
  }

  .botao {
    margin: 0 auto;
    width: 256px;
  }
}

@media screen and (min-width: 1440px) {
  .sobre {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4rem 7.5rem;
  }

  .imagem {
    background-image: url("../assets/images/desktop/imagens/homepage-imagem-1.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 609px;
    border-radius: 1rem;
  }

  .informacoes {
    width: 540px;
  }
}
</style>
