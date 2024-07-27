<script lang="ts">
import { defineComponent } from "vue";
import Banner from "../components/Banner.vue";

export default defineComponent({
  name: "InformacoesGerais",
  components: {
    Banner,
  },
});
</script>

<template>
  <main>
    <Banner page="informacoes" />
    <section class="informacoes">
      <h2 class="titulo">Perguntas Frequentes:</h2>
      <div
        class="accordion accordion-flush perguntas"
        id="accordionFlushExample"
      >
        <div class="accordion-item pergunta">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed pergunta__titulo"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Quais serão as atrações?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <p class="pergunta__texto">
                Teremos dois dias de shows, o primeiro (11/03) com bandas de
                rock, e o segundo (12/03) com bandas pop.
                <router-link class="pergunta__link" to="/"
                  >Confira o line-up em detalhes clicando neste
                  link!</router-link
                >
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item pergunta">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed pergunta__titulo"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Qual é a classificação etária?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <p class="pergunta__texto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                ex in cumque qui accusamus doloribus a veniam dolorum
                exercitationem dolores. Vero quos dolores enim quaerat veritatis
                numquam impedit rerum nobis!
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item pergunta">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed pergunta__titulo"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Quais são os setores disponíveis?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <p class="pergunta__texto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                ex in cumque qui accusamus doloribus a veniam dolorum
                exercitationem dolores. Vero quos dolores enim quaerat veritatis
                numquam impedit rerum nobis!
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item pergunta">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed pergunta__titulo"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              Quais são os itens proibidos?
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <p class="pergunta__texto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                ex in cumque qui accusamus doloribus a veniam dolorum
                exercitationem dolores. Vero quos dolores enim quaerat veritatis
                numquam impedit rerum nobis!
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item pergunta">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed pergunta__titulo"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              Quais são os itens proibidos?
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <p class="pergunta__texto">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                ex in cumque qui accusamus doloribus a veniam dolorum
                exercitationem dolores. Vero quos dolores enim quaerat veritatis
                numquam impedit rerum nobis!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.informacoes {
  padding: 3rem 1.5rem;
}

.titulo {
  font-family: var(--fonte-titulo);
  font-size: 2rem;
  line-height: 41.6px;
  text-align: center;
}

.perguntas {
  padding-top: 3rem;
}

.pergunta {
  background-color: var(--azul-claro);
  border: 1px solid var(--roxo-boreal);
}

.pergunta:not(.accordion) {
  border: none;
}

.pergunta {
  margin-top: 8px;
}

.pergunta__titulo {
  background-color: var(--roxo-boreal);
  color: var(--branco);
  font-size: 2rem;
  font-weight: 700;
  line-height: 37.57px;
}

.pergunta__texto,
.pergunta__link {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 40px;
  color: var(--cinza);
}

.accordion-button::after {
  background-image: url("../assets/images/icones/arrow_drop_down.svg");
  height: 32px;
  width: 32px;
  background-size: auto;
  margin: 0;
  position: absolute;
  top: 50%;
  right: 0px;
  transform: none;
  box-shadow: none;
}

.accordion-button:focus {
  box-shadow: none;
}

@media screen and (min-width: 768px) {
  .titulo {
    font-size: 3rem;
    line-height: 62.4px;
  }

  .informacoes {
    padding: 3rem 3.75rem;
  }
}

@media screen and (min-width: 1440px) {
  .informacoes {
    padding: 3rem 13.875rem;
  }
}
</style>
