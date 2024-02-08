<script>
export default {
    name: 'CoverTitle',
    props: {
        productionMovie: Object,
    }
}
</script>

<template>
    <ul>
        <li><img :src="`https://image.tmdb.org/t/p/w342${productionMovie.backdrop_path}`"></li>
        <!-- <li>{{ productionMovie.title }}</li>
        <li>{{ productionMovie.original_title }}</li>
        <li>{{ productionMovie.vote_average }}</li> -->

    </ul>
</template>