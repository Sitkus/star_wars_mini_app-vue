import flushPromises from 'flush-promises';
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
    test('shows loading indicator', () => {
        const wrapper = shallowMount(Movies, { localVue, store });
        const loadingIndicator = wrapper.find('[data-testid="loading"]');

        expect(loadingIndicator.isVisible()).toBe(true);
        expect(loadingIndicator.text()).toBe('Loading movies...');
    });

    test('render <MovieList> and <CharactersTable> components', async () => {
        expect.assertions(2);

        const wrapper = shallowMount(Movies, { localVue, store });
        await wrapper.setData({
            isLoading: false
        });

        expect(wrapper.findComponent(MovieList)).toBeTruthy();
        expect(wrapper.findComponent(CharactersTable)).toBeTruthy();
    });

    test('sets "isLoading" data property to false', async () => {
        expect.assertions(2);

        const wrapper = shallowMount(Movies, { localVue, store });

        expect(wrapper.vm.isLoading).toBe(true);

        await flushPromises();

        expect(wrapper.vm.isLoading).toBe(false);
    });

    test('"fetchMovies" action is called immediately', () => {
        shallowMount(Movies, { localVue, store });

        expect(actions.fetchMovies).toHaveBeenCalledTimes(1);
    });
});
