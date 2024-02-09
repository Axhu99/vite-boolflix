<script>
import { store } from '../data/store.js';
import SearchForm from './SearchForm.vue';

export default {
    name: 'AppHeader',
    data: () => ({ store }),
    components: { SearchForm },
    methods: {
        setTitleFilter(titleText) {
            store.filter = titleText;
        },
    },
    emits: ['onSubmitEvent']
}
</script>

<template>
    <header class="d-flex justify-content-around align-items-center">
        <a href="#">bootflix</a>
        <SearchForm @submit-form="$emit('onSubmitEvent')" @term-change="setTitleFilter" placeholder="Cerca il titolo"
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