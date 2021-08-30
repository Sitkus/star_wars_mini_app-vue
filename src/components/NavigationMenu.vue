<template>
    <nav class="nav">
        <router-link class="nav__link" to="/" data-testid="link">
            <span class="link-title">
                About
            </span>
            <FontAwesomeIcon icon="caret-right" />
        </router-link>

        <router-link class="nav__link nav__link--last" to="/movies" data-testid="link">
            <span class="link-title">
                Movies
            </span>
            <FontAwesomeIcon icon="caret-right" />
        </router-link>
    </nav>
</template>

<style lang="scss" scoped>
@import '@/assets/sass/Components/NavigationMenu.scss';
</style>
