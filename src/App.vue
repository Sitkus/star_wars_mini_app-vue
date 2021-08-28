<template>
    <div id="app">
        <NavigationMenu />
        <router-view />
    </div>
</template>

<script>
import NavigationMenu from '@/components/NavigationMenu';

export default {
    name: 'App',

    components: {
        NavigationMenu
    }
};
</script>

<style lang="scss">
@import '@/assets/sass/Global/global.scss';
</style>
