<script>
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
            <section>
                <h2>movies</h2>
                <div class="row row-cols-4 g-3">
                    <CoverTitle v-for="movie in   store.movies  " :key="movie.id" v-bind="movie" class="col" />
                </div>
            </section>
            <section>
                <h2>series</h2>
                <div class="row row-cols-4 g-3">
                    <CoverTitle v-for="serie in   store.series  " :key="serie.id" v-bind="serie" class="col" />
                </div>
            </section>
        </div>
    </main>
</template>

<style></style>