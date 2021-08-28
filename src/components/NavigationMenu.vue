<template>
    <nav class="nav">
        <router-link class="nav__link" to="/">About</router-link>

        <router-link class="nav__link" to="/films">Films</router-link>
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
