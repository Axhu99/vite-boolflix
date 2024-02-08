<script>
import { api } from './data/index';
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
    fetchMovies() {
      if (!store.filter) {
        store.movies = [];
        return
      }
      const { baseUri, language, apiKey } = api;

      const params = {
        query: store.filter,
        api_key: apiKey,
        language
      }

      axios.get(`${baseUri}/search/movie`, { params })
        .then((res) => {
          //TODO map per predere solo i dati che mi servono 
          store.movies = res.data.results
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<template>
  <AppHeader @onSubmitEvent="fetchMovies" />
  <AppMain />
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
