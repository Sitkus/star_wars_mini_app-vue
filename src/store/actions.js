export default {
    async fetchMovies({ commit }) {
        try {
            const response = await fetch('https://swapi.dev/api/films/');
            const data = await response.json();

            commit('SET_MOVIES', data.results);

            console.log(data.results);
        } catch (err) {
            console.error(err);
        }
    },

    async fetchCharacters({ commit }, urls) {
        try {
            const response = await Promise.all(urls);
            // const data = await response.json();

            // commit('SET_CHARACTERS', data);

            console.log(response);
        } catch (err) {
            console.error(err);
        }
    }
};
