import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../views/Homepage.vue";
import AExperiencia from "../views/AExperiencia.vue";
import MapaDeSetores from "../views/MapaDeSetores.vue";
import InformacoesGerais from "../views/InformacoesGerais.vue";
import Ingresso from "../views/Ingresso.vue";
import IngressoComprado from "../views/IngressoComprado.vue";

const rotas = [
  {
    path: "/",
    name: "Homepage",
    component: Homepage,
  },
  {
    path: "/a-experiencia",
    name: "AExperiencia",
    component: AExperiencia,
  },
  {
    path: "/mapa-de-setores",
    name: "MapaDeSetores",
    component: MapaDeSetores,
  },
  {
    path: "/informacoes",
    name: "InformacoesGerais",
    component: InformacoesGerais,
  },
  {
    path: "/ingresso",
    name: "Ingresso",
    component: Ingresso,
  },
  {
    path: "/ingresso-comprado",
    name: "IngressoComprado",
    component: IngressoComprado,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: rotas,
});

export default router;
