<script>
import { api, mapProductions } from './data/index';
import { store } from './data/store.js';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';



export default {
  name: 'Boolflix',
  data: () => ({
    store
  }),
  components: { AppHeader, AppMain },
  methods: {
    fetchProductions() {
      if (!store.filter) {
        store.movies = [];
        store.series = [];
        return;
      }

      this.fetchApi('search/movie', 'movies')
      this.fetchApi('search/tv', 'series')
    },

    fetchApi(endpoint, collection) {
      const { baseUri, language, apiKey } = api;

      const params = {
        query: store.filter,
        api_key: apiKey,
        language
      }

      axios.get(`${baseUri}/${endpoint}`, { params })
        .then((res) => {
          store[collection] = res.data.results.map(mapProductions)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<template>
  <AppHeader @onSubmitEvent="fetchProductions" />
  <AppMain />
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
