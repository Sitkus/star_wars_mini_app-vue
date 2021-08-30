import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Movies from '../Movies.vue';
import MovieList from '@/components/MovieList';
import CharactersTable from '@/components/CharactersTable';
import storeConfig from '@/store';

const localVue = createLocalVue();
localVue.use(Vuex);

let store;
let actions;

beforeEach(() => {
    actions = {
        fetchMovies: jest.fn()
    };

    store = new Vuex.Store({
        ...storeConfig,
        actions
    });
});

describe('Movies.vue', () => {
    // test('shows loading indicator', () => {
    // });

    test('render <MovieList> and <CharactersTable> components', async () => {
        expect.assertions(2);
        const wrapper = shallowMount(Movies, { localVue, store });
        await wrapper.setData({
            isLoading: false
        });
        expect(wrapper.findComponent(MovieList)).toBe(true);
        expect(wrapper.findComponent(CharactersTable)).toBe(true);
    });

    // test('sets "isLoading" data property to false', () => {
    // })
});
