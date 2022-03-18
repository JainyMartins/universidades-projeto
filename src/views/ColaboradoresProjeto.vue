<template>
  <container>
    <h2 class="titulo2 mt-5 text-h5">Colaboradores 🧑‍💻</h2>

    <v-simple-table>
      <template>
        <tbody>
          <tr v-for="colaborador of Colaboradores" :key="colaborador.id">
            <td>
              <v-avatar size="62" mb-50 mt-5>
                <img :src="colaborador.img" :alt="colaborador.nome" />
              </v-avatar>
            </td>

            <td>
                <span>{{ colaborador.nome }}</span>
            </td>
            <td>
              <a :href="colaborador.gitHub">GitHub</a>
            </td>
            <td>
              <a :href="colaborador.linkedIn">LinkedIn</a>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </container>
</template>

<script>
export default {
  name: "ColaboradoresProjeto",

  data() {
    return {
      Colaboradores: [
{ 
id: 1,

nome:  'Bruna Finholdt L. Perez',

img:  'https://avatars.githubusercontent.com/u/97919478?v=4',

gitHub: 'https://github.com/bruna-finholdt',

linkedIn: 'https://www.linkedin.com/in/bruna-finholdt/'

},

{
id: 2,

nome:  'Jainy Estefany Martins',

img:  'https://avatars.githubusercontent.com/u/97862719?v=4',

gitHub: 'https://github.com/JainyMartins',

linkedIn: 'https://www.linkedin.com/in/jainy-estefany-martins-173443b2/'
},

{
id: 3,

nome:  'Aline Pereira Lourenço',

img:  'https://avatars.githubusercontent.com/u/85578642?s=40&v=4',

gitHub: 'https://github.com/AlineLourenco',

linkedIn: 'https://www.linkedin.com/in/alinelourenco2022/',
},

{
id: 4,

nome:  'Lucas Silva Costa',

img:  'https://avatars.githubusercontent.com/u/88735409?v=4',

gitHub: 'https://github.com/LucasCosta9199',

linkedIn: 'https://www.linkedin.com/in/lucascosta9199/',
},

{
id: 5,

nome:  'Adriano Santos de Lira Júnior',

img:  'https://avatars.githubusercontent.com/u/56485692?v=4',

gitHub: 'https://github.com/dev-adriano-lira',

linkedIn: 'https://www.linkedin.com/in/dev-adriano-lira/'
},

{
id: 6,

nome:  'Tamara Luz',

img:  'https://avatars.githubusercontent.com/u/97554143?v=4',

gitHub: 'https://github.com/tamarabluz/',

linkedIn: 'https://www.linkedin.com/'
}

]
    };
  },
};
</script>

<style scoped>
.titulo2 {
  margin-bottom: 3px;
  margin-top: 5px;
  text-align: center;
}
</style>