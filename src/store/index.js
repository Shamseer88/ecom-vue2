import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";
import { projectId, projectUrl } from "@/constants/projectDetails";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
  },
  getters: {
    getCategories(state) {
      return state.categories;
    },
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
  },
  actions: {
    async fetchCategories({ commit }) {
      try {
        const response = await axios.get(
          `${projectUrl}/ecommerce/clothes/categories`,
          {
            headers: {
              "Content-Type": "application/json",
              projectId: projectId,
            },
          }
        );
        commit("setCategories", response.data.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
