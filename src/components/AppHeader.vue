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
    <header>
        <div class="container d-flex justify-content-between">
            <a class="titleWeb" href="#">boolflix</a>
            <SearchForm @submit-form="$emit('onSubmitEvent')" @term-change="setTitleFilter" placeholder="Cerca il titolo"
                button-text="CERCA" />
        </div>
    </header>
</template>

<style>
header {
    background-color: #000;
    height: 80px;

    display: flex;
    align-items: center;
}

.titleWeb {
    font-size: 2rem;
    text-transform: uppercase;
    color: red;
    text-decoration: none;
}
</style>