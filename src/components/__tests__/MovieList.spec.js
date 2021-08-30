import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import MovieList from '../MovieList.vue';
import MovieItem from '../MovieItem.vue';
import storeConfig from '@/store';

const localVue = createLocalVue();
localVue.use(Vuex);

let store;
let state;

beforeEach(() => {
    state = {
        movies: [
            {
                episode_id: 1
            },
            {
                episode_id: 2
            }
        ]
    };

    store = new Vuex.Store({
        ...storeConfig,
        state
    });
});

describe('MovieList.vue', () => {
    test('renders two movies', () => {
        const wrapper = mount(MovieList, { localVue, store });

        expect(wrapper.findAllComponents(MovieItem).length).toBe(2);
    });
});
