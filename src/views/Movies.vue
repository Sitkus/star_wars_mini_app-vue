<template>
    <section class="movies">
        <p v-if="isLoading" class="loading" data-testid="loading">
            Loading movies...
        </p>

        <template v-else>
            <MovieList />
            <CharactersTable />
        </template>
    </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MovieList from '@/components/MovieList';
import CharactersTable from '@/components/CharactersTable';

export default {
    name: 'Movies',

    components: {
        MovieList,
        CharactersTable
    },

    computed: {
        ...mapGetters(['getCharacters'])
    },

    data() {
        return {
            isLoading: true
        };
    },

    async created() {
        await this.fetchMovies();
        this.isLoading = false;
    },

    methods: mapActions(['fetchMovies'])
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/Views/Movies.scss';
</style>
