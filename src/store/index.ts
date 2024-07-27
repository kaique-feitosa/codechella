import { createStore } from "vuex";

import {
  imagemHomepage,
  imagemAExperiencia,
  imagemSetores,
  imagemInformacoes,
  imagemIngresso,
  imagemIngressoComprado,
} from "./imagens";

import IBanner from "../interface/IBanner";
import IState from "../interface/IState";

export default createStore<IState>({
  state: {
    banners: {
      homepage: {
        imagem: imagemHomepage,
        titulo: "Boas-vindas ao #CodeChella2023!",
      },
      aExperiencia: {
        imagem: imagemAExperiencia,
        titulo: "A Experiência",
      },
      mapaDeSetores: {
        imagem: imagemSetores,
        titulo: "Mapa de Setores",
      },
      informacoes: {
        imagem: imagemInformacoes,
        titulo: "Informações Gerais",
      },
      ingresso: {
        imagem: imagemIngresso,
        titulo: "Garanta seu Ingresso",
      },
      ingressoComprado: {
        imagem: imagemIngressoComprado,
        titulo: "Seu ingresso está aqui!",
      },
    },
  },

  getters: {
    getBanner:
      (state) =>
      (page: string): IBanner => {
        return state.banners[page];
      },
  },
});
