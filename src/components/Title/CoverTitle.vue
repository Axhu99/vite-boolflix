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
        <div class="basecard">
            <img :src="posterSrc" class="imgCard">
            <div class="d-flex align-items-center">
                <ul class="p-0 m-0 h-100 cardtext">
                    <li>{{ title }}</li>
                    <li>{{ originalTitle }}</li>
                    <li>{{ voteAverage }}</li>
                    <li>
                        <FontAwesomeIcon v-for="n in 5" :key="n" :icon="[iconStyle(n), 'star']" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
li {
    list-style-type: none;
}

.imgCard {
    display: block;
    width: 300px;
    height: 400px;
    object-fit: cover;
}

.basecard {
    position: relative;
}

.cardtext {
    display: none;
    color: #fff;
    text-align: center;

    /* TODO sistemare il pezzo che esco in piu */
    background-color: rgba(0, 0, 0, 0.8);

    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    flex-direction: column;
    justify-content: center;

}

.basecard:hover .cardtext {
    display: flex;
}
</style>
