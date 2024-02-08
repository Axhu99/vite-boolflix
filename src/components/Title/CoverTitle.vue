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

        <li>{{ productionMovie.title }}</li>
        <li>{{ productionMovie.original_title }}</li>
        <li>{{ productionMovie.vote_average }}</li>

    </ul>
</template>