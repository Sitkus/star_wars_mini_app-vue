<template>
    <li class="item">
        <aside class="item__side item__side--column">
            <div class="item__headings-wrapper">
                <h2 class="item__heading-2">{{ movie.title }}</h2>
                <h4 class="item__heading-4">{{ releaseDate }}</h4>
            </div>

            <a class="item__link" href="#" role="button" data-testid="load-btn" @click.prevent="loadCharacters">
                Show Characters
            </a>
        </aside>

        <aside class="item__side item__side--last">
            <h3 class="item__heading-3">{{ movie.episode_id }}</h3>
        </aside>
    </li>
</template>

<script>
import { mapActions } from 'vuex';

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
        ...mapActions(['fetchCharacters', 'setMovieTitle', 'setIsLoadingCharacters']),

        loadCharacters() {
            this.setIsLoadingCharacters(true);
            this.setMovieTitle(this.movie.title);
            this.fetchCharacters(this.movie.characters);
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/Components/MovieItem.scss';
</style>
