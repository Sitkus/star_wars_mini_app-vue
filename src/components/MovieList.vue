<template>
    <ul class="movie-list">
        <MovieItem v-for="movie in getMovies" :key="movie.episode_id" :movie="movie" />
    </ul>
</template>

<script>
import { mapGetters } from 'vuex';
import MovieItem from './MovieItem';

export default {
    name: 'MovieList',

    components: {
        MovieItem
    },

    computed: mapGetters(['getMovies'])
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/MovieList.scss';
</style>
