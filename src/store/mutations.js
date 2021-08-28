export default {
    SET_MOVIES(state, movies) {
        state.movies = movies;
    },

    SET_CHARACTERS(state, characters) {
        state.characters = characters;
    },

    SET_MOVIE_TITLE(state, title) {
        state.movie_title = title;
    },

    CLEAR_CHARACTERS(state) {
        state.characters = [];
    },

    SET_IS_LOADING_CHARACTERS(state, boolean) {
        state.is_loading_characters = boolean;
    }
};
