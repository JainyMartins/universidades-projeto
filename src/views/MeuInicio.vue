<template>
  <v-container>
    <h2 class="h2" text-h5 text-center mb-3 mt-5>
      <v-icon>mdi-school</v-icon>
      Universidades do Reino Unido
    </h2>

    <v-img
      class="inicio-imagem mt-5 mb-5"
      src="https://st2.depositphotos.com/6193152/10087/i/950/depositphotos_100876046-stock-photo-oxford-university-oxford-united-kingdom.jpg"
      alt=""
    >
    </v-img>

    <p>
      Pensando em estudar no Reino Unido e não sabe qual Universidade escolher?
      Basta acessar a próxima página para ter acesso a uma lista das melhores
      Universidades para se estudar.
    </p>
    <p>
      Nessa lista você pode acessar os sites das principais universidades de
      maneira simples e rápida!
    </p>
  </v-container>
</template>

<script>
export default {
  name: "MeuInicio",
};
</script>

<style scoped>
.inicio-imagem {
  border-radius: 5px;
}
.h2 {
  font-size: 22px;
}
</style>