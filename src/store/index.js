import getters from './getters';
import actions from './actions';
import mutations from './mutations';

export default {
    state: {
        movie_title: '',
        movies: [],
        characters: [],
        is_loading_characters: false
    },
    getters,
    actions,
    mutations
};
