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
    <div>
        <img :src="posterSrc" class="img-fluid d-block imgCard">
        <div>
            <ul class="p-0 m-0 d-none h-100">
                <li>{{ title }}</li>
                <li>{{ originalTitle }}</li>
                <li>{{ voteAverage }}</li>
                <li>
                    <FontAwesomeIcon v-for="n in 5" :key="n" :icon="[iconStyle(n), 'star']" />
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
li {
    list-style-type: none;
}

.imgCard {
    width: 300px;
    height: 450px;
    object-fit: cover;
}
</style>
