export default {
    async fetchMovies({ commit }) {
        try {
            const response = await fetch('https://swapi.dev/api/films/');
            const data = await response.json();

            commit('SET_MOVIES', data.results);
        } catch (err) {
            alert('Something wrong happened, please try again.');
        }
    },

    async fetchCharacters({ commit }, urls) {
        commit('CLEAR_CHARACTERS');

        try {
            const data = await Promise.all(
                urls.map(async function fetchCharacterInfo(url) {
                    const response = await fetch(url);
                    const characterInfo = await response.json();

                    return characterInfo;
                })
            );

            commit('SET_CHARACTERS', data);
            commit('SET_IS_LOADING_CHARACTERS', false);
        } catch (err) {
            alert('Something wrong happened, please try again.');
        }
    },

    setMovieTitle({ commit }, title) {
        commit('SET_MOVIE_TITLE', title);
    },

    setIsLoadingCharacters({ commit }, boolean) {
        commit('SET_IS_LOADING_CHARACTERS', boolean);
    }
};
