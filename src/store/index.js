import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import { settings } from "./settings";
import { validValues } from "./validValues";
import { lootData } from "./lootData";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  supportCircular: true,
  storage: window.localStorage,
  modules: ["settings"]
});

export default new Vuex.Store({
  modules: {
    lootData: lootData,
    validValues: validValues,
    settings: settings
  },
  plugins: [vuexLocal.plugin]
});
