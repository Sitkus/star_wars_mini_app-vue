<template>
    <li class="item">
        <aside class="item__side">
            <h2 class="item__heading-2">{{ movie.title }}</h2>
            <h4 class="item__heading-4">{{ releaseDate }}</h4>

            <a class="item__link" href="#" role="button" @click.prevent="loadCharacters">Show People</a>
        </aside>

        <aside class="item__side item__side--last">
            <h3 class="item__heading-3">{{ movie.episode_id }}</h3>
        </aside>
    </li>
</template>

<script>
export default {
    name: 'MovieItem',

    props: {
        movie: {
            type: Object,
            required: true
        }
    },

    computed: {
        releaseDate() {
            return `Release Date: ${this.movie.release_date}`;
        }
    },

    methods: {
        loadCharacters() {
            // ...
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/MovieItem.scss';
</style>
