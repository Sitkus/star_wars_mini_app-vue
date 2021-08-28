<template>
    <section class="movies">
        <p v-if="isLoading" class="loading">
            Loading movies...
        </p>

        <template v-else>
            <MovieList />
            <!-- <PeopleTable v-show="getCharacters" /> -->
        </template>
    </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MovieList from '@/components/MovieList';
import PeopleTable from '@/components/PeopleTable';

export default {
    name: 'Movies',

    components: {
        MovieList,
        PeopleTable
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
@import '@/assets/sass/Movies.scss';
</style>
