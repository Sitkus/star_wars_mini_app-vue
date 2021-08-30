import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import CharactersTable from '../CharactersTable.vue';
import storeConfig from '@/store';

const localVue = createLocalVue();
localVue.use(Vuex);

let store;
let state;

beforeEach(() => {
    state = {
        movie_title: 'Jedi',
        characters: [
            {
                name: 'Joda',
                birth_year: '1994/12/01',
                gender: 'Unknown',
                mass: 25
            },
            {
                name: 'Chubaka',
                birth_year: '1959/12/01',
                gender: 'Chu Baka',
                mass: 996
            }
        ],
        is_loading_characters: true
    };

    store = new Vuex.Store({
        ...storeConfig,
        state
    });
});

afterEach(() => {
    jest.clearAllMocks();
});

describe('CharactersTable.vue', () => {
    test('computed property generates caption string', () => {
        const wrapper = shallowMount(CharactersTable, { localVue, store });

        expect(wrapper.vm.caption).toBe(`Characters in film title "${state.movie_title}":`);
    });

    test('renders loading indicator', () => {
        const wrapper = shallowMount(CharactersTable, { localVue, store });
        wrapper.vm.$store.state.characters = [];

        wrapper.vm.$nextTick(() => {
            const loadingIndicator = wrapper.find('[data-testid="loading"]');
            expect(loadingIndicator.isVisible()).toBe(true);
        });
    });

    test('renders table with rows for each character', () => {
        const wrapper = shallowMount(CharactersTable, { localVue, store });
        wrapper.vm.$store.state.is_loading_characters = false;

        wrapper.vm.$nextTick(() => {
            const table = wrapper.find('table');
            const tableRows = wrapper.findAll('tr');

            expect(table.isVisible()).toBe(true);
            expect(tableRows.length).toBe(2);
            expect(tableRows.at(0).text()).toBe('1. Joda 1994/12/01 Unknown 25 kg');
            expect(tableRows.at(1).text()).toBe('2. Chubaka 1959/12/01 Chu Baka 996 kg');
        });
    });
});
