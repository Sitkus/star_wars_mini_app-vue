import { shallowMount } from '@vue/test-utils';
import NavigationMenu from '../NavigationMenu.vue';

let wrapper;

beforeEach(() => {
    wrapper = shallowMount(NavigationMenu, {
        stubs: ['router-link', 'FontAwesomeIcon']
    });
});

describe('NavigationMenu.vue', () => {
    test('render "About" and "Movies" links', () => {
        const links = wrapper.findAll('[data-testid="link"]');

        expect(links.length).toBe(2);
        expect(links.at(0).text()).toBe('About');
        expect(links.at(1).text()).toBe('Movies');
    });

    test('links have proper attributes "to"', () => {
        const links = wrapper.findAll('[data-testid="link"]');

        expect(links.at(0).element.getAttribute('to')).toBe('/');
        expect(links.at(1).element.getAttribute('to')).toBe('/movies');
    });
});
