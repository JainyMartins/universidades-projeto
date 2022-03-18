<template>
  <div class="app-top-bar">
    <v-app-bar color="#001a69" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Menu</v-toolbar-title>

    <v-spacer></v-spacer>

        <v-switch 
            :value="darkMode" 
            @change="toggleDarkMode" 
        >
        </v-switch>

    <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-menu left bottom> </v-menu>

    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense >
        <v-list-item-group v-model="group" active-class="red darken-3--text text--accent-4">

        <router-link to="/">
            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Início</v-list-item-title>
            </v-list-item>
        </router-link>

        <router-link to="/listauniversidades">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Lista das Universidades</v-list-item-title>
          </v-list-item>
        </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    
  </div>
</template>

<script>
export default {
  name: "AppTopBar",
  
  data: () => ({
    darkMode: false,
    drawer: false,
    group: null,
  }),
  methods: {
      toggleDarkMode: function () {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        this.darkMode = !this.darkMode;
      }
  },
  
};
</script>

<style scoped>
    .app-top-bar a{
        text-decoration: none;
    }

    .v-list-item-group .v-list-item--active{
        color: white;
    }
</style>