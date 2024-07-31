<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Cabecalho",
  setup() {
    const menuAberto = ref(false);

    const abrirMenu = () => {
      menuAberto.value = !menuAberto.value;
    };

    return {
      menuAberto,
      abrirMenu,
    };
  },
});
</script>

<template>
  <header class="cabecalho">
    <nav class="navbar">
      <router-link to="/">
        <img
          src="../assets/images/logos/logo-branco.svg"
          alt="Logo do CodeChella"
          class="logo"
        />
      </router-link>

      <div class="links">
        <router-link to="/a-experiencia" class="link"
          >A experiência</router-link
        >
        <router-link to="/mapa-de-setores" class="link"
          >Mapa de Setores</router-link
        >
        <router-link to="/informacoes" class="link">Informações</router-link>
        <router-link to="/ingresso" class="link">Ingresso</router-link>
      </div>
    </nav>
    <div class="menu">
      <button @click="abrirMenu" class="botao__menu">
        <img
          src="../assets/images/mobile/icones/menu.svg"
          alt="Ícone de menu"
        />
      </button>
      <ul v-if="menuAberto" class="menu-suspenso">
        <li>
          <router-link to="/a-experiencia" class="link">
            A experiência
          </router-link>
        </li>
        <span class="divisor"></span>
        <li>
          <router-link to="/mapa-de-setores" class="link">
            Mapa de Setores
          </router-link>
        </li>
        <span class="divisor"></span>
        <li>
          <router-link to="/informacoes" class="link">
            Informações
          </router-link>
        </li>
        <span class="divisor"></span>
        <li>
          <router-link to="/ingresso" class="link"> Ingresso </router-link>
        </li>
        <span class="divisor"></span>
      </ul>
    </div>
  </header>
</template>

<style scoped>
.cabecalho {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  background-color: var(--roxo-boreal);
  padding: 2rem 1.5rem;
}

.links {
  display: none;
}

.botao__menu {
  background-color: transparent;
}

.menu-suspenso {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--roxo-boreal);
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 130px;
}

.link {
  color: var(--branco);
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 40px;
  opacity: 70%;
  text-decoration: none;
  transition: 0.6s ease;
}

.router-link-active,
.link:hover {
  font-weight: 700;
  opacity: 100%;
  transition: 0.6s ease;
}

.menu-suspenso__link {
  padding: 0.5rem;
}

.divisor {
  border-bottom: 1px solid var(--branco);
  width: 146px;
}

@media screen and (min-width: 768px) {
  .cabecalho {
    justify-content: center;
    padding: 2rem 3.75rem;
  }

  .navbar {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 52px;
  }

  .menu {
    display: none;
  }
}

@media screen and (min-width: 1440px) {
  .cabecalho {
    padding: 2rem 7.5rem;
  }

  .navbar {
    flex-direction: row;
    gap: 19.8rem;
  }
}
</style>
