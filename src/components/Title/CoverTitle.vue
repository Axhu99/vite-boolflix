<script>
import { pics } from '../../data/index.js';
export default {
    name: 'CoverTitle',
    props: {
        id: Number,
        title: String,
        originalTitle: String,
        voteAverage: Number,
        lang: String,
        posterPath: String || null
    },
    computed: {
        posterSrc() {
            return this.posterPath ? pics.baseUri + this.posterPath : pics.placeholder;
        },
        vote() {
            return Math.ceil(this.voteAverage / 2)
        }
    },
    methods: {
        iconStyle(n) {
            return n <= this.vote ? 'fas' : 'far';
        }
    }
}
</script>

<template>
    <ul>
        <li>
            <img :src="posterSrc">
        </li>
        <li>{{ title }}</li>
        <li>{{ originalTitle }}</li>
        <li>{{ voteAverage }}</li>
        <li>
            <FontAwesomeIcon v-for="n in 5" :key="n" :icon="[iconStyle(n), 'star']" />
        </li>

    </ul>
</template>