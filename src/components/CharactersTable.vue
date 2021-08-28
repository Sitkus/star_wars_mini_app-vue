<template>
    <div class="table-wrapper">
        <template v-if="!getCharacters.length && !isLoadingCharacters"></template>

        <h5 v-else-if="!getCharacters.length && isLoadingCharacters">Loading characters...</h5>

        <table v-else class="characters">
            <caption class="characters__caption">
                {{
                    caption
                }}
            </caption>

            <thead class="characters__thead">
                <th class="table-header">ID</th>
                <th class="table-header">Name</th>
                <th class="table-header">Birth Year</th>
                <th class="table-header">Gender</th>
                <th class="table-header">Mass</th>
            </thead>

            <tbody class="characters__tbody">
                <tr v-for="(character, index) in getCharacters" :key="index" class="table-row">
                    <td class="table-data">{{ index + 1 }}.</td>
                    <td class="table-data">{{ character.name }}</td>
                    <td class="table-data">{{ character.birth_year }}</td>
                    <td class="table-data">{{ character.gender }}</td>
                    <td class="table-data">{{ character.mass }} kg</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'CharactersTable',

    computed: {
        ...mapGetters(['getCharacters', 'getMovieTitle', 'isLoadingCharacters']),

        caption() {
            return `Characters in film title "${this.getMovieTitle}":`;
        }
    }
};
</script>

<style lang="scss" scoped>
@import '@/assets/sass/CharactersTable.scss';
</style>
