<template>

    <v-container>
        <h2>Lista de Universidades</h2>

        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th>Universidade</th>
                        <th>Domíno</th>
                        <th>Web Page</th>
                    </tr>
                </thead>
            <tbody>
                <tr v-for="(universidade, index) of ListaUniversidades" :key="universidade.country">
                    <td>{{ index + 1 }}</td>
                    <td>
                        <span>{{ universidade.name }}</span>
                    </td>
                    <td>{{ universidade.domains }}</td>
                    <td>{{ universidade.web_pages }}
                </tr>
            </tbody>
            </template>
        </v-simple-table>

    </v-container>

</template>

<script>
export default {
    name: 'ListaUniversidades'
}
</script>

<style scoped>

</style>