<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import IState from "../interface/IState";
import IBanner from "../interface/IBanner";

export default defineComponent({
  name: "Banner",
  props: {
    page: { type: String, required: true },
  },
  setup(props) {
    const store = useStore<IState>();

    const banner = computed((): IBanner => {
      return store.getters.getBanner(props.page);
    });

    return {
      banner,
    };
  },
});
</script>

<template>
  <div
    :style="{
      backgroundImage: 'url(' + banner.imagem + ')' }"
    class="banner"
  >
    <h1 class="boas-vindas">
      {{ banner.titulo }}
    </h1>
  </div>
</template>

<style scoped>
.banner {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 281px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.boas-vindas {
  font-family: var(--fonte-titulo);
  font-size: 2rem;
  line-height: 41.6px;
  text-align: center;
}

@media screen and (min-width: 768px) {
  .banner {
    height: 384px;
  }

  .boas-vindas {
    font-size: 4rem;
    line-height: 83.2px;
  }
}

@media screen and (min-width: 1440px) {
  .banner {
    height: 407px;
  }

  .boas-vindas {
    width: 60%;
  }
}
</style>
