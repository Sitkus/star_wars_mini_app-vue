import { shallowMount } from '@vue/test-utils';
import About from '../About.vue';

describe('About.vue', () => {
    test('render static page', () => {
        const wrapper = shallowMount(About);
        expect(wrapper.html()).toMatchSnapshot();
    });
});
