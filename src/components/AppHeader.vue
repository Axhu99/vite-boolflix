<script>
import SearchForm from './SearchForm.vue'
export default {
    name: 'AppHeader',
    components: { SearchForm },
    emits: ['serchText']
}
</script>

<template>
    <header class="d-flex justify-content-around align-items-center">
        <a href="#">bootflix</a>
        <SearchForm placeholder="Cerca il titolo" button-text="CERCA" @submit-form="$emit('serchText', $event)" />
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