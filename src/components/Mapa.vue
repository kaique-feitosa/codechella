<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Mapa",
});
</script>

<template>
  <section class="mapa">
    <picture>
      <source
        media="(min-width: 1440px)"
        srcset="../assets/images/desktop/imagens/mapa-setores-1.png"
      />
      <source
        media="(min-width: 768px)"
        srcset="../assets/images/tablet/imagens/mapa-setores-1.png"
      />
      <img
        src="../assets/images/mobile/imagens/mapa-setores-1.png"
        alt="Mapa de um estádio dividido em várias seções: 'Palco' no topo centrals, 'Pista Premium' (azul claro) logo abaixo do palco, 'Pista' (rosa) no centro, áreas acessíveis (ícones de cadeirantes) entre a Pista Premium e Pista. Ao redor das Pistas as cadeiras do térreo (verde) e em azul escuro ao longo da periferia do estádio as cadeiras superiores."
      />
    </picture>
    <div class="legenda">
      <h6 class="legenda__titulo">Legenda:</h6>
      <ul class="legenda__lista">
        <li>
          <div
            class="legenda__quadro pista-premium"
            aria-label="Área azul claro"
          ></div>
          <p class="legenda__texto">Pista Premium</p>
        </li>
        <li>
          <div class="legenda__quadro pista-comum" aria-label="Área rosa"></div>
          <p class="legenda__texto">Pista Comum</p>
        </li>
        <li>
          <div
            class="legenda__quadro cadeiras-terreo"
            aria-label="Área verde"
          ></div>
          <p class="legenda__texto">Cadeiras térreo</p>
        </li>
        <li>
          <div
            class="legenda__quadro cadeiras-sup"
            aria-label="Área azul escuro"
          ></div>
          <p class="legenda__texto">Cadeiras superiores</p>
        </li>
        <li>
          <div
            class="legenda__quadro rampas"
            aria-label="Área azul claro"
          ></div>
          <p class="legenda__texto">Rampas</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.legenda {
  padding: 0 3.5625rem;
}

.legenda__titulo {
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 40px;
}

.legenda__lista li {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-top: 1.5rem;
}

.legenda__quadro {
  height: 32px;
  width: 32px;
}

.pista-premium,
.rampas {
  background-color: #0e7df1;
}

.pista-comum {
  background-color: #fe016e;
}

.cadeiras-terreo {
  background-color: #01a89e;
}

.cadeiras-sup {
  background-color: #3f51b5;
}

@media screen and (min-width: 768px) {
  .mapa {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .legenda {
    padding: 2rem 3.75rem;
  }

  .legenda {
    margin: 0 auto;
  }

  .legenda__titulo {
    font-size: 2rem;
    text-align: left;
  }
}

@media screen and (min-width: 1440px) {
  .mapa {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 2rem 7.5rem;
  }

  .legenda {
    margin: 0;
  }
}
</style>
