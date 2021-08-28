<template>
    <nav class="nav">
        <router-link class="nav__link" to="/">
            <span class="link-title">
                About
            </span>
            <FontAwesomeIcon icon="caret-right" />
        </router-link>

        <router-link class="nav__link nav__link--last" to="/films">
            <span class="link-title">
                Films
            </span>
            <FontAwesomeIcon icon="caret-right" />
        </router-link>
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
