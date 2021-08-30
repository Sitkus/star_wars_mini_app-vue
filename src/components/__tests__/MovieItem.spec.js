import flushPromises from 'flush-promises';
import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import MovieItem from '../MovieItem.vue';
import storeConfig from '@/store';

const localVue = createLocalVue();
localVue.use(Vuex);

let store;
let actions;
let propsData;

beforeEach(() => {
    actions = {
        ...storeConfig.actions,
        fetchCharacters: jest.fn()
    };

    store = new Vuex.Store({
        ...storeConfig,
        actions
    });

    propsData = {
        movie: {
            title: 'Jedi',
            release_date: '1994/12/01',
            episode_id: 2,
            characters: ['Joda', 'Lukas']
        }
    };
});

afterEach(() => {
    jest.clearAllMocks();
});

describe('MovieItem.vue', () => {
    test('computed property generates release date string', () => {
        const wrapper = shallowMount(MovieItem, { localVue, store, propsData });

        expect(wrapper.vm.releaseDate).toBe(`Release Date: ${propsData.movie.release_date}`);
    });

    test('calls "loadCharacters" method', async () => {
        expect.assertions(1);

        const spy = jest.spyOn(MovieItem.methods, 'loadCharacters');
        const wrapper = shallowMount(MovieItem, { localVue, store, propsData });
        const btn = wrapper.find('[data-testid="load-btn"]');

        await btn.trigger('click');

        expect(spy).toHaveBeenCalledTimes(1);
    });

    test('sets store property "is_loading_characters" to true', async () => {
        expect.assertions(2);

        const spy = jest.spyOn(MovieItem.methods, 'setIsLoadingCharacters');
        const wrapper = shallowMount(MovieItem, { localVue, store, propsData });
        const btn = wrapper.find('[data-testid="load-btn"]');

        await btn.trigger('click');

        expect(spy).toHaveBeenCalledWith(true);
        expect(wrapper.vm.$store.state.is_loading_characters).toBe(true);
    });

    test('sets store property "movie_title" to current movie title', async () => {
        expect.assertions(2);

        const spy = jest.spyOn(MovieItem.methods, 'setMovieTitle');
        const wrapper = shallowMount(MovieItem, { localVue, store, propsData });
        const btn = wrapper.find('[data-testid="load-btn"]');

        await btn.trigger('click');

        expect(spy).toHaveBeenCalledWith(propsData.movie.title);
        expect(wrapper.vm.$store.state.movie_title).toBe(propsData.movie.title);
    });

    test('dispatches "fetchCharacters" with current characters array', async () => {
        expect.assertions(2);

        const spy = jest.spyOn(MovieItem.methods, 'fetchCharacters');
        const wrapper = shallowMount(MovieItem, { localVue, store, propsData });
        const btn = wrapper.find('[data-testid="load-btn"]');

        await btn.trigger('click');

        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(propsData.movie.characters);
    });
});
