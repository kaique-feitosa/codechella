<script lang="ts">
import { defineComponent } from "vue";
import Banner from "../components/Banner.vue";

export default defineComponent({
  name: "IngressoComprado",
  components: {
    Banner,
  },
  setup() {
    const nome = localStorage.getItem("nome") || "";
    const tipoIngresso = localStorage.getItem("tipoIngresso") || "";

    return {
      nome,
      tipoIngresso,
    };
  },
});
</script>

<template>
  <main>
    <Banner page="ingressoComprado" />
    <section class="ingresso-comprado">
      <h2 class="titulo">
        Uhul, agora sim! Seu ingresso está aqui, apresente na entrada do evento
        e divirta-se!
      </h2>
      <div class="ingresso">
        <div class="cabecalho">
          <img
            src="../assets/images/logos/logo-branco.svg"
            alt="Logo do CodeChella"
            class="logo"
          />
          <img
            src="../assets/images/logos/simbolo-ingresso.svg"
            alt="Simbolo da logo do CodeChella"
            class="icone-logo"
          />
        </div>
        <div class="infos">
          <img
            src="../assets/images/icones/qr-code-1.svg"
            alt="QR Code do ingresso"
            class="qr-code"
          />
          <div class="conteudo">
            <h6 class="nome">{{ nome }}</h6>
            <span>Ingresso por QR Code</span>
            <span>{{ tipoIngresso }}</span>
            <span>Data: 11/03</span>
            <span>Local: São Paulo-SP</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.ingresso-comprado {
  padding: 4rem 1.5rem;
}

.titulo {
  font-size: 2rem;
  font-weight: 700;
  line-height: 37.57px;
  text-align: center;
  padding-bottom: 2rem;
}

.ingresso {
  background-image: var(--gradiente-boreal);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 4px 4px 8px 0px #00000026;
  padding: 2rem;
}

.cabecalho {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  height: 32px;
  width: 116.95px;
}

.icone-logo {
  height: 2rem;
  width: 2rem;
}

.infos {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qr-code {
  height: 190px;
  width: 248px;
  margin: 2rem 0;
}

.conteudo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.nome {
  font-size: 2rem;
  font-weight: 700;
  line-height: 37.57px;
  padding-top: 0.5rem;
}

.infos span {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 40px;
}

@media screen and (min-width: 768px) {
  .ingresso-comprado {
    padding: 4rem 3.75rem;
  }

  .qr-code {
    width: 584px;
    height: 310px;
    margin: 2rem 0;
  }

  .nome {
    padding-top: 0.5rem;
  }
}

@media screen and (min-width: 1440px) {
  .ingresso-comprado {
    padding: 4rem 20.25rem;
  }

  .qr-code {
    width: 189px;
    height: 222px;
  }

  .infos {
    flex-direction: row;
    gap: 3rem;
  }

  .conteudo {
    align-items: flex-start;
  }
}
</style>
