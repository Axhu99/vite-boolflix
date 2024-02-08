<script>
import { api } from '../data/index';
import { store } from '../data/store.js';
import CoverTitle from './Title/CoverTitle.vue';
export default {
    name: 'AppMain',
    components: { CoverTitle },
    data: () => ({ store })
}
</script>   

<template>
    <main>
        <div class="container">
            <section class="movies">
                <h2>movies</h2>
                <CoverTitle v-for="movie in   store.movies  " :key="movie.id" :productionMovie="movie" />
            </section>
        </div>
    </main>
</template>