<script>
import { api } from '../data/index';
import { store } from '../data/store.js';
import SearchForm from './SearchForm.vue';
import axios from 'axios';

export default {
    name: 'AppHeader',
    data: () => ({ store }),
    components: { SearchForm },
    methods: {
        setTitleFilter(titleText) {
            store.filter = titleText;
        },
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
    <header class="d-flex justify-content-around align-items-center">
        <a href="#">bootflix</a>
        <SearchForm @term-change="setTitleFilter" @submit-form="fetchMovies" placeholder="Cerca il titolo"
            button-text="CERCA" />
    </header>
</template>

<style>
header {
    background-color: #000;
    height: 80px;
}

a {
    font-size: 2rem;
    text-transform: uppercase;
    color: red;
    text-decoration: none;
}
</style>