<template>
    <nav class="nav">
        <ul class="nav__list">
            <li class="nav__item">
                <router-link class="nav__link" to="/">About</router-link>
            </li>

            <li class="nav__item">
                <router-link class="nav__link" to="/films">Films</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavigationMenu'
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/NavigationMenu.scss';
</style>
