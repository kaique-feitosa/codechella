<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Rodape",
});
</script>

<template>
  <footer class="rodape">
    <div class="infos">
      <img
        src="../assets/images/logos/logo-branco.svg"
        alt="Logo do CodeChella"
        class="logo"
      />
      <div class="redes">
        <p class="redes__texto">Acesse nossas redes:</p>
        <div class="redes__icones">
          <a href="https://web.whatsapp.com/" target="_blank">
            <img
              src="../assets/images/icones/icone-whatsapp-branco.svg"
              alt="Ícone do WhatsApp"
              class="icone"
            />
          </a>
          <a href="https://www.twitch.tv/" target="_blank">
            <img
              src="../assets/images/icones/icone-twitch-branco.svg"
              alt="Ícone da Twitch"
              class="icone"
            />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img
              src="../assets/images/icones/icone-instagram-branco.svg"
              alt="Iocne do instagram"
              class="icone"
            />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img
              src="../assets/images/icones/icone-twitter-branco.svg"
              alt="Ícone do Twitter"
              class="icone"
            />
          </a>
        </div>
      </div>
    </div>
    <p class="rodape__texto">
      Desenvolvido por
      <a class="dev" href="https://github.com/kaique-feitosa" target="_blank"
        >Kaique Feitosa</a
      >. Design oferecido por Alura. Projeto fictício sem fins comerciais.
    </p>
  </footer>
</template>

<style scoped>
.rodape {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--roxo-boreal);
  padding: 1.5rem;
}

.redes {
  text-align: center;
  margin-top: 0.5rem;
}

.redes__icones {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 0.5rem;
}

.redes__texto,
.rodape__texto {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 40px;
  text-align: center;
}

.rodape__texto {
  padding-top: 2rem;
}

.dev {
  color: var(--branco);
  font-weight: 500;
  text-decoration: none;
  transition: 0.5s ease;
}

.dev:hover {
  font-weight: 700;
  transition: 0.5s ease;
}

@media screen and (min-width: 768px) {
  .infos {
    text-align: center;
  }

  .redes {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .redes__texto {
    margin-top: 13px;
  }
}

@media screen and (min-width: 1440px) {
  .rodape {
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem 7.5rem;
  }

  .rodape__texto {
    padding: 0;
    width: 25.5%;
    text-align: left;
  }
}
</style>
