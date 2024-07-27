<script lang="ts">
import { defineComponent, ref } from "vue";
import Banner from "../components/Banner.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Ingresso",
  components: {
    Banner,
  },
  setup() {
    const router = useRouter();
    const nome = ref("");
    const email = ref("");
    const tipoIngresso = ref("");
    const data = ref("");
    const erros = ref({
      nome: "",
      email: "",
      tipoIngresso: "",
      data: "",
    });

    const validarFormulario = () => {
      let valido = true;

      const nomePadrao = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
      if (nome.value.length > 150 || !nomePadrao.test(nome.value)) {
        erros.value.nome =
          "Nome deve ter até 150 caracteres e conter apenas letras";
        valido = false;
      } else {
        erros.value.nome = "";
      }

      const emailPadrao = /^[^\s@]+@[^\s@]+\.[^s@]+$/;
      if (!emailPadrao.test(email.value) || email.value.length > 150) {
        erros.value.email = "Email inválido ou muito longo";
        valido = false;
      } else {
        erros.value.email = "";
      }

      if (
        tipoIngresso.value === "" ||
        tipoIngresso.value === "Tipo de ingresso"
      ) {
        erros.value.tipoIngresso = "Selecione um tipo de ingresso";
        valido = false;
      } else {
        erros.value.tipoIngresso = "";
      }

      if (!data.value) {
        erros.value.data = "Data de nascimento é obrigatória";
        valido = false;
      } else {
        erros.value.data = "";
      }

      return valido;
    };

    const aoEnviar = (evento: Event) => {
      evento.preventDefault();
      if (validarFormulario()) {
        localStorage.setItem('nome', nome.value)
        localStorage.setItem('tipoIngresso', tipoIngresso.value)
        router.push("/ingresso-comprado");
      }
    };

    return {
      nome,
      email,
      tipoIngresso,
      data,
      erros,
      aoEnviar,
    };
  },
});
</script>

<template>
  <main>
    <Banner page="ingresso" />
    <section class="ingresso">
      <h2 class="titulo">Preencha o formulário a seguir:</h2>

      <form class="formulario" @submit="aoEnviar">
        <div class="container-input nome">
          <label for="nome">Nome Completo:</label>
          <input
            type="text"
            name="nome"
            id="nome"
            v-model="nome"
            autocomplete="on"
            required
            :maxlength="150"
          />
          <span class="erro" v-if="erros.nome">{{ erros.nome }}</span>
        </div>
        <div class="container-input email">
          <label for="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            v-model="email"
            autocomplete="on"
            required
            :maxlength="150"
          />
          <span class="erro" v-if="erros.email">{{ erros.email }}</span>
        </div>
        <div class="container-input tipo-ingresso">
          <label for="tipo-ingresso">Tipo de ingresso</label>
          <select
            name="tipo-ingresso"
            id="tipo-ingresso"
            v-model="tipoIngresso"
            required
          >
            <option value="" disabled selected>Tipo de ingresso</option>
            <option value="Pista Premium">Pista Premium</option>
            <option value="Pista Comum">Pista Comum</option>
            <option value="Cadeiras Terreo">Cadeiras Térreo</option>
            <option value="Cadeiras Superiores">Cadeiras Superiores</option>
          </select>
          <span class="erro" v-if="erros.tipoIngresso">{{
            erros.tipoIngresso
          }}</span>
        </div>
        <div class="container-input data">
          <label for="data">Data de Nascimento:</label>
          <input
            type="date"
            name="data"
            id="data"
            v-model="data"
            autocomplete="off"
            required
          />
          <span class="erro" v-if="erros.data">{{ erros.data }}</span>
        </div>

        <button type="submit" class="botao">
          Avançar!
          <img
            src="../assets/images/icones/seta-direita.svg"
            alt="Seta apontando para a direita"
          />
        </button>
      </form>
    </section>
  </main>
</template>

<style scoped>
.ingresso {
  padding: 2rem 1.5rem;
}

.titulo {
  font-family: var(--fonte-titulo);
  font-size: 2rem;
  line-height: 41.6px;
  text-align: center;
}

.formulario {
  padding-top: 3rem;
}

.container-input {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 2rem;
}

.container-input label {
  font-size: 2rem;
  line-height: 37.57px;
  font-weight: 700;
}

.container-input input,
.container-input select {
  color: var(--cinza);
  height: 48px;
  padding: 0 1rem;
}

.botao {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: var(--roxo-boreal);
  box-shadow: 4px 4px 0px 0px #000000;
  border-radius: 1rem;
  color: var(--branco);
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 40px;
  padding: 0.5rem 1rem;
  width: 164px;
  margin: 0 auto;
  transition: 0.4s ease;
}

.botao:hover {
  transform: scale(0.95);
  transition: 0.4s ease;
}

.erro {
  color: #ff0000;
  font-size: 0.875rem;
}

@media screen and (min-width: 768px) {
  .ingresso {
    padding: 3rem 3.75rem;
  }

  .titulo {
    font-size: 3rem;
    line-height: 62.4px;
  }

  #data {
    width: 70%;
  }
}

@media screen and (min-width: 1440px) {
  .ingresso {
    padding: 3rem 20.15625rem;
  }

  .formulario {
    display: grid;
    grid-template-areas:
      "nome nome"
      "email email"
      "ingresso data"
      "botao botao";
    column-gap: 1.5rem;
    row-gap: 2rem;
  }

  .nome {
    grid-area: nome;
  }

  .email {
    grid-area: email;
  }

  .tipo-ingresso {
    grid-area: ingresso;
  }

  .data {
    grid-area: data;
  }

  #data {
    width: 100%;
  }

  .botao {
    grid-area: botao;
  }
}
</style>
