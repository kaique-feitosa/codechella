<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LineUp",
});
</script>

<template>
  <h2 class="titulo" id="lineUp" >/Line-Up/</h2>
  <section class="line-up">
    <div class="dia">
      <div class="data">
        <span class="linha"></span>
        <h3 class="data__titulo">SÁBADO <span>&lt;11/03&gt;</span></h3>
        <span class="linha"></span>
      </div>

      <ul class="lista-atracoes">
        <li>
          <div class="atracoes principal">
            <span class="atracao">System of a DOM</span>
          </div>
        </li>
        <li>
          <div class="atracoes segunda">
            <span class="atracao">Python Maiden</span>
            <span class="atracao">Apollo Client 2001</span>
            <span class="atracao">Bon Java</span>
            <span class="atracao">NickCallback</span>
          </div>
        </li>
        <li>
          <div class="atracoes terceira">
            <span class="atracao">Linkin Promises</span>
            <span class="atracao">Fullstack Fighters</span>
            <span class="atracao">Papa React</span>
            <span class="atracao">Angular in Chains</span>
          </div>
        </li>
        <li>
          <div class="atracoes quarta">
            <span class="atracao">Agnostic Front-end</span>
            <span class="atracao">SlipkNode</span>
            <span class="atracao">Pink Flutter</span>
            <span class="atracao">Kiss</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="dia">
      <div class="data">
        <span class="linha"></span>
        <h3 class="data__titulo">DOMINGO <span>&lt;12/03&gt;</span></h3>
        <span class="linha"></span>
      </div>
      <ul class="lista-atracoes">
        <li>
          <div class="atracoes principal">
            <span class="atracao">Lana Del Ploy</span>
          </div>
        </li>
        <li>
          <div class="atracoes segunda">
            <span class="atracao">Dua Lib</span>
            <span class="atracao">The Backnd</span>
            <span class="atracao">CSS Styles</span>
            <span class="atracao">DJ Query</span>
            <span class="atracao">ArrayAna Grande</span>
          </div>
        </li>
        <li>
          <div class="atracoes terceira">
            <span class="atracao">Miley Cypress</span>
            <span class="atracao">The Bootstrap Boys</span>
            <span class="atracao">Json Derulo</span>
            <span class="atracao">CloudPlay</span>
            <span class="atracao">Dev Lovato</span>
          </div>
        </li>
        <li>
          <div class="atracoes quarta">
            <span class="atracao">Kylie MiLOG</span>
            <span class="atracao">Jenkins Brothers</span>
            <span class="atracao">Rubycat Dolls</span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.titulo {
  font-family: var(--fonte-titulo);
  font-size: 3rem;
  line-height: 62.4px;
  padding: 2rem 1.5rem;
  text-align: center;
}

.line-up {
  padding: 3rem 1.5rem;
}

.data__titulo {
  font-family: var(--fonte-titulo);
  font-size: 2rem;
  line-height: 41.6px;
  background-color: var(--verde-primario);
  padding: 1rem;
  text-align: center;
}

.linha {
  display: none;
}

.lista-atracoes {
  padding-top: 3rem;
}

.atracoes {
  text-align: center;
  padding-bottom: 2rem;
}

.atracao {
  display: block;
  padding-bottom: 1.5rem;
}

.principal {
  font-size: 3em;
  font-weight: 800;
  line-height: 56.35px;
}

.segunda {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 46.96px;
}

.terceira,
.quarta {
  font-size: 2rem;
  line-height: 37.57px;
}

.terceira {
  font-weight: 700;
}

.quarta {
  font-weight: 500;
}

@media screen and (min-width: 768px) {
  .titulo {
    font-size: 4rem;
    padding: 2rem 3.75rem;
  }

  .line-up {
    padding: 3rem 3.75rem;
  }

  .data {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    font-size: 3rem;
  }

  .linha {
    display: inline-block;
    border-bottom: 1px solid var(--verde-primario);
    width: 83.5px;
  }

  .lista-atracoes {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 32px;
    padding-bottom: 3rem;
  }

  .atracoes {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 32px;
    padding-bottom: 0;
  }

  .atracao {
    padding-bottom: 0;
  }
}

@media screen and (min-width: 1440px) {
  .titulo {
    padding: 2rem 7.5rem;
  }

  .linha {
    width: 359.5px;
  }

  .lista-atracoes {
    padding-bottom: 3.5rem;
  }
}
</style>
