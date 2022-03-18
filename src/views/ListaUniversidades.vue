<template>

    <v-container>
        <h2 class="titulo text-h5">Lista de Universidades 🎓</h2>

        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr> 
                        <th colspan="3" class="text-left">Universidade</th>
                        <th class="text-right">Domíno</th>
                        <th class="text-right">Web Page</th>
                    </tr>
                </thead>
            <tbody>
                <tr v-for="(universidade, index) of listaUniversidadesAlfabetica" :key="universidade.country">
                    <td>{{ index + 1 }}</td>
                    <td>
                        <span class="pl-2">{{ universidade.name }}</span>
                    </td>
                    <td class="text-right">{{ universidade.domains }}</td>
                    <td class="text-right">{{ universidade.web_pages }}</td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
    </v-container>

</template>

<script>
export default {
    name: 'ListaUniversidades',
    data() {
        return {
            listaUniversidades: []
        }
    },
    computed: {
        listaUniversidadesAlfabetica(){
            const listaAlfabetica = this.listaUniversidades.slice(0).sort(
                (a, b) => a.name < b.name ? -1 : 1
            );
            return listaAlfabetica
        }
    },
    created() {
        fetch('http://universities.hipolabs.com/search?country=United+Kingdom')
        .then(resposta => resposta.json())
        .then(json => {
            this.listaUniversidades = json
            console.log(this.listaUniversidades)
        });
    }
}
</script>

<style scoped>
   .titulo{
       margin-bottom: 3px;
       margin-top: 5px;
       text-align: center;
   }
</style>